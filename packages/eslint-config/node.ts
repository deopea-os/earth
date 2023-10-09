import type { TSESLint } from "@typescript-eslint/utils/dist";

const config: TSESLint.Linter.Config = {
  extends: ["./index.js"],
  env: {
    node: true,
  },
};

export = config;
