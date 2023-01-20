import type { Options } from "semantic-release";

const config: Options = {
  extends: "semantic-release-monorepo",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      { config: "@deopea/conventional-changelog" },
    ],
    [
      "@semantic-release/release-notes-generator",
      { config: "@deopea/conventional-changelog" },
    ],
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
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
