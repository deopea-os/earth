import type { NormalizedReadResult } from "read-pkg-up";
import type {
  AnalyzeCommitsContext,
  Commit,
  GenerateNotesContext,
  GlobalConfig,
  Options,
} from "semantic-release";

import path = require("path");
import pkgUp = require("read-pkg-up");
import simpleGit = require("simple-git");
import utils = require("./utils.cjs");

const pkg: NormalizedReadResult | undefined = pkgUp.sync();
const pkgDir = pkg && path.dirname(pkg.path);
const git = simpleGit.simpleGit();

let _commitsCache: Record<string, Array<Commit & { include: boolean }>> = {};
const getPackageCommits = async (commits: readonly Commit[]) =>
  (_commitsCache[pkg!.packageJson.name] ??= await Promise.all(
    commits.map(async (cmt) => {
      const res = await git.show(["--stat", cmt.hash, pkgDir!]);
      return {
        ...cmt,
        include: Boolean(res),
      };
    }),
  ).then((cs) => cs.filter((c) => c.include)));

const wrapLifecycle =
  (lifecycle: "analyzeCommits" | "generateNotes") =>
  async (
    config: Options,
    {
      logger,
      commits: allCommits,
      ...ctx
    }: (AnalyzeCommitsContext | GenerateNotesContext) & {
      options: GlobalConfig;
    },
  ) => {
    const commitsToInclude = await getPackageCommits(allCommits);

    if (!commitsToInclude?.length) {
      logger.log("Release does not include changes for package");
    } else {
      logger.log("Release includes changes for package");
    }

    let res: unknown;
    for (const plugin of ctx.options.plugins) {
      const pluginName = typeof plugin === "string" ? plugin : plugin[0];
      // const pluginOptions =
      //   typeof plugin === "string"
      //     ? {}
      //     : (plugin[1] as Record<string, unknown>);

      const module = await utils.dynamicImport(pluginName);
      if (!module[lifecycle]) continue;

      logger.success("Release workspaces", "loaded plugin", pluginName);
      res = await module[lifecycle]?.(
        // TODO: add in plugin options
        config,
        {
          ...ctx,
          logger,
          commits: commitsToInclude,
        },
      );
      logger.success(
        "Release workspaces",
        "completed step",
        lifecycle,
        "of plugin",
        pluginName,
      );
    }

    return res;
  };

const verifyConditions = () => {
  if (!pkg) throw new Error("package.json unavailable");
};

const onComplete = () => {
  _commitsCache = {};
};

export = {
  verifyConditions,
  analyzeCommits: wrapLifecycle("analyzeCommits"),
  generateNotes: wrapLifecycle("generateNotes"),
  success: onComplete,
  fail: onComplete,
  tagFormat: `${pkg!.packageJson.name}-v\${version}`,
};
