import type { Config } from "conventional-changelog-config-spec";
import conventionalConfig, {
  ResolvedConfig,
} from "conventional-changelog-conventionalcommits";

const config: Config = {
  types: [
    { type: "build", section: "Build System", hidden: true },
    { type: "chore", section: "Miscellaneous Chores", hidden: true },
    { type: "ci", section: "Continuous Integration", hidden: true },
    { type: "config", section: "Configurations", hidden: true },
    { type: "deps", section: "Dependencies", hidden: true },
    { type: "docs", section: "Documentation", hidden: true },
    { type: "feat", section: "Features" },
    { type: "fix", section: "Bug Fixes" },
    { type: "perf", section: "Performance Improvements" },
    { type: "refactor", section: "Code Refactoring", hidden: true },
    { type: "revert", section: "Reverts" },
    { type: "style", section: "Styles", hidden: true },
    { type: "test", section: "Tests", hidden: true },
  ],
};

const options: ResolvedConfig & { config: typeof config } = {
  ...conventionalConfig(config),
  config,
};

export = options;
