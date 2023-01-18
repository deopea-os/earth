/**
 * @type {import('@typescript-eslint/utils').TSESLint.Linter.Config}
 */
module.exports = {
  extends: ["./index.js", "plugin:qwik/recommended"],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
