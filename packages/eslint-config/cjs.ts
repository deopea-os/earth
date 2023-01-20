import type { TSESLint } from "@typescript-eslint/utils";

const config: TSESLint.Linter.Config = {
  extends: ["./index.js"],
  overrides: [
    {
      files: ["*.js"],
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

export = config;
