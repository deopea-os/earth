import type { NormalizedReadResult } from "read-pkg-up";
import type {
  AnalyzeCommitsContext,
  Commit,
  GenerateNotesContext,
  GlobalConfig,
} from "semantic-release";

import path = require("path");
import pkgUp = require("read-pkg-up");
import simpleGit = require("simple-git");

const pkg: NormalizedReadResult | undefined = pkgUp.sync();
const pkgDir = pkg && path.dirname(pkg.path);
const git = simpleGit.simpleGit();

const verifyConditions = () => {
  if (!pkg) throw new Error("package.json unavailable");
};

let commitsToInclude: Array<Commit & { include: boolean }> | null = null;
const wrapLifecycle =
  (lifecycle: string) =>
  async (
    config: GlobalConfig,
    {
      logger,
      commits,
      ...ctx
    }: (AnalyzeCommitsContext | GenerateNotesContext) & {
      options: GlobalConfig;
    },
  ) => {
    commitsToInclude ??= await Promise.all(
      commits.map(async (cmt) => {
        const res = await git.show(["--stat", cmt.hash, pkgDir!]);
        logger.debug("Include commit:", cmt.hash, Boolean(res));

        return {
          ...cmt,
          include: Boolean(res),
        };
      }),
    ).then((cs) => cs.filter((c) => c.include));

    if (!commitsToInclude?.length) {
      logger.log("Release does not include changes for package");
    } else {
      logger.log("Release includes changes for package");
    }

    let res: unknown;
    for (const plugin of ctx.options.plugins) {
      const pluginName = typeof plugin === "string" ? plugin : plugin[0];

      const module = await new Function(`return import("${pluginName}");`)();
      if (!module[lifecycle]) continue;

      logger.success("Release workspaces", "loaded plugin", pluginName);
      res = await module[lifecycle]?.(config, {
        ...ctx,
        logger,
        commits,
      });
      logger.success(
        "Release workspaces",
        "completed step",
        lifecycle,
        "of plugin",
        pluginName,
      );
    }

    if (lifecycle === "generateNotes") {
      logger.log(res);
    }
    return res;
  };

const onComplete = () => {
  commitsToInclude = null;
};

export = {
  verifyConditions,
  analyzeCommits: wrapLifecycle("analyzeCommits"),
  generateNotes: wrapLifecycle("generateNotes"),
  success: onComplete,
  fail: onComplete,
  tagFormat: `${pkg!.packageJson.name}-v\${version}`,
};
