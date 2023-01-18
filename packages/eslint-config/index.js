const tsconfig = require("@deopea/tsconfig");

/**
 * @type {import('@typescript-eslint/utils').TSESLint.Linter.Config}
 */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  env: {
    [tsconfig.compilerOptions.module.toLowerCase()]: true,
    "shared-node-browser": true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["**/*.cjs"],
      env: {
        commonjs: true,
        node: true,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
