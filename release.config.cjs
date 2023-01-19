/**
 * @type {import("semantic-release").Options}
 */
module.exports = {
  plugins: ["@semantic-release/changelog"],
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "main",
    "next",
    "next-major",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true },
  ],
};
