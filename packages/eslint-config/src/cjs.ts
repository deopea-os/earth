import type { Linter } from "eslint";
import globals from "globals";
import base from "./base.js";

const cjs: Linter.FlatConfig[] = [
  ...base,
  {
    languageOptions: {
      globals: {
        ...globals.commonjs,
      },
    },
  },
];

export default cjs;
