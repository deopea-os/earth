import type { Options } from "semantic-release";

const config: Options = {
  extends: "semantic-release-monorepo",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        config: "@deopea.os/conventional-changelog",
        releaseRules: [
          { type: "docs", scope: "README", release: "patch" },
          { type: "refactor", release: "patch" },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      { config: "@deopea.os/conventional-changelog" },
    ],
    ["@semantic-release/changelog", { changelogTitle: "Changelog" }],
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github",
  ],
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "main",
    "next",
    "next-major",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true },
  ],
};

export = config;
