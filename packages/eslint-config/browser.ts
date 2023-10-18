import type { TSESLint } from "@typescript-eslint/utils/dist";

const config: TSESLint.Linter.Config = {
  extends: ["./index.js"],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};

export = config;
