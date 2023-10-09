import tsconfig = require("@deopea.os/tsconfig/base.json");
import type { TSESLint } from "@typescript-eslint/utils/dist";

const config: TSESLint.Linter.Config = {
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
      files: ["**/*.{js,cjs}"],
      env: {
        commonjs: true,
        node: true,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-empty-interface": "off",
  },
};

export = config;
