/**
 * @type {import("@typescript-eslint/utils").TSESLint.Linter.Config}
 */
module.exports = {
  extends: "./cjs.js",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
};
