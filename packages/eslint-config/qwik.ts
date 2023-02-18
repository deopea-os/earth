import type { TSESLint } from "@typescript-eslint/utils";

const config: TSESLint.Linter.Config = {
  extends: ["./node.js", "./browser.js", "plugin:qwik/recommended"],
};

export = config;
