/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  extends: ["./lib/index.cjs", "./lib/release-workspaces.cjs"],
};
