import { FlatCompat } from "@eslint/eslintrc";
import type { Linter } from "eslint";
import path from "path";
import { fileURLToPath } from "url";
import browser from "./browser.js";
import node from "./node.js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const qwik: Linter.FlatConfig[] = [
  ...compat.extends("plugin:qwik/recommended"),
  ...node,
  ...browser,
];

export default qwik;
