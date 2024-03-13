import { Linter } from "eslint";
import globals from "globals";
import base from "./base.js";

const browser: Linter.FlatConfig[] = [
  ...base,
  {
    languageOptions: {
      ecmaVersion: 2017,
      globals: {
        ...globals.browser,
      },
    },
  },
];

export default browser;
