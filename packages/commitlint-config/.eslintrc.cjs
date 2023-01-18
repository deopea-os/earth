/**
 * @type {import("@typescript-eslint/utils").TSESLint.Linter.Config}
 */
module.exports = {
  extends: "@deopea/eslint-config",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
