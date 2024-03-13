import type { ESLint } from "eslint";
import { readPackageUp } from "read-package-up";
import browser from "./browser.js";
import cjs from "./cjs.js";
import node from "./node.js";
import qwik from "./qwik.js";

const pkg = await readPackageUp();

const plugin = {
  meta: {
    name: pkg?.packageJson.name,
    version: pkg?.packageJson.version,
  },
  configs: {
    browser,
    cjs,
    node,
    qwik,
  },
} satisfies ESLint.Plugin;

export default plugin;
