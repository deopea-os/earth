/**
 * @type {import("semantic-release").Options}
 */
module.exports = {
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
