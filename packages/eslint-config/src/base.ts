import js from "@eslint/js";
import type { Linter } from "eslint";
import prettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

const base: Linter.FlatConfig[] = [
  js.configs.recommended,
  ...(tseslint.configs.recommendedTypeChecked as Linter.FlatConfig[]),
  prettier,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...globals["shared-node-browser"],
      },
    },
  },
  {
    files: ["**/*.cjs", "**/*.cts"],
    languageOptions: {
      globals: {
        ...globals.commonjs,
      },
    },
  },
];

export default base;
