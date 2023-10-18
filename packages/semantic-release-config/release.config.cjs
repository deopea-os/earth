/**
 * @type {import("semantic-release").Options}
 */
module.exports = {
  ...require("./lib/index.cjs"),
  extends: "./lib/release-workspaces.cjs",
};
