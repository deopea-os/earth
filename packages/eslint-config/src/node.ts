import type { Linter } from "eslint";
import globals from "globals";
import base from "./base.js";

const node: Linter.FlatConfig[] = [
  ...base,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];

export default node;
