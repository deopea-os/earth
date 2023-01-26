import { createTheme } from "@vanilla-extract/css";

export const [theme, vars] = createTheme({
  color: {
    primary: {
      default: "#ffb3af",
      onDefault: "#660710",
      container: "#852123",
      onContainer: "#ffdad7",
    },
    secondary: {
      default: "#e7bdba",
      onDefault: "#442928",
      container: "#5d3f3d",
      onContainer: "#ffdad7",
    },
    tertiary: {
      default: "#e2c28c",
      onDefault: "#402d05",
      container: "#594319",
      onContainer: "#ffdea8",
    },
    error: {
      default: "#ffb4ab",
      onDefault: "#93000a",
      container: "#690005",
      onContainer: "#ffdad6",
    },
    bg: {
      default: "#201a1a",
      onDefault: "#ede0de",
    },
    surface: {
      default: "#201a1a",
      onDefault: "#ede0de",
      variant: "#534342",
      onVariant: "#d8c2c0",
    },
    outline: "#a08c8b",
    shadow: "#000000",
  },
});
