import tsconfig from "@deopea/tsconfig";
import type { TSESLint } from "@typescript-eslint/utils";

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

export = config;
