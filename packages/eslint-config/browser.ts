import type { TSESLint } from "@typescript-eslint/utils";

const config: TSESLint.Linter.Config = {
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

export = config;
