const defaultTheme = require("tailwindcss/defaultTheme");
const typographyPlugin = require("@tailwindcss/typography");

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  plugins: [typographyPlugin],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", ...defaultTheme.fontFamily.mono],
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          "default": "#ffb3af",
          "fg": "#660710",
          "container": "#852123",
          "container-fg": "#ffdad7",
        },
        secondary: {
          "default": "#e7bdba",
          "fg": "#442928",
          "container": "#5d3f3d",
          "container-fg": "#ffdad7",
        },
        tertiary: {
          "default": "#e2c28c",
          "fg": "#402d05",
          "container": "#594319",
          "container-fg": "#ffdea8",
        },
        error: {
          "default": "#ffb4ab",
          "fg": "#93000a",
          "container": "#690005",
          "container-fg": "#ffdad6",
        },
        bg: {
          default: "#201a1a",
          fg: "#ede0de",
        },
        surface: {
          "default": "#201a1a",
          "fg": "#ede0de",
          "variant": "#534342",
          "variant-fg": "#d8c2c0",
        },
        outline: "#a08c8b",
      },
    },
  },
};
