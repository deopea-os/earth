const defaultTheme = require("tailwindcss/defaultTheme");

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        deopea: {
          "primary": "#0EA3F4",
          "secondary": "#FB2576",
          "accent": "#3F0071",
          "base-100": "#010101",
          "error": "#93000A",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", ...defaultTheme.fontFamily.mono],
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        "blob": {
          from: {
            top: "-20px",
            left: "-20px",
            transform: "translate(-20px, -20px) rotate(-90deg)",
          },
          to: {
            top: "100%",
            left: "100%",
            transform: "translate(-100%, -100%) rotate(-10deg)",
          },
        },
        "blob2": {
          from: {
            top: "-10px",
            left: "-10px",
            transform: "translate(-10px, -10px) rotate(90deg)",
          },
          to: {
            top: "100%",
            left: "100%",
            transform: "translate(-100%, -100%) rotate(-10deg)",
          },
        },
      },
      animation: {
        blob: "blob 25s ease-in-out infinite alternate",
        blob2: "blob2 25s ease-in-out 1s both infinite alternate",
      },
      // colors: {
      //   primary: {
      //     "default": "#ffb3af",
      //     "fg": "#660710",
      //     "container": "#852123",
      //     "container-fg": "#ffdad7",
      //   },
      //   secondary: {
      //     "default": "#e7bdba",
      //     "fg": "#442928",
      //     "container": "#5d3f3d",
      //     "container-fg": "#ffdad7",
      //   },
      //   tertiary: {
      //     "default": "#e2c28c",
      //     "fg": "#402d05",
      //     "container": "#594319",
      //     "container-fg": "#ffdea8",
      //   },
      //   error: {
      //     "default": "#ffb4ab",
      //     "fg": "#93000a",
      //     "container": "#690005",
      //     "container-fg": "#ffdad6",
      //   },
      //   bg: {
      //     default: "#201a1a",
      //     fg: "#ede0de",
      //   },
      //   surface: {
      //     "default": "#201a1a",
      //     "fg": "#ede0de",
      //     "variant": "#534342",
      //     "variant-fg": "#d8c2c0",
      //   },
      //   outline: "#a08c8b",
      // },
    },
  },
};
