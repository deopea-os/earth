import type { Options } from "prettier";

const config: Options = {
  plugins: ["tailwindcss"],
  endOfLine: "lf",
  quoteProps: "consistent",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
};

export = config;
