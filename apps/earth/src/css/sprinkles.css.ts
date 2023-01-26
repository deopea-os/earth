import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

const space = {
  none: 0,
  small: "4px",
  medium: "8px",
  large: "16px",
};

const ResponsiveConditions = {
  mobile: {},
  tablet: { "@media": "screen and (min-width: 768px)" },
  desktop: { "@media": "screen and (min-width: 1024px)" },
} as const;

const ResponsiveProperties = defineProperties({
  conditions: ResponsiveConditions,
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],

    paddingX: ["paddingLeft", "paddingRight"],
    px: ["paddingLeft", "paddingRight"],

    paddingY: ["paddingTop", "paddingBottom"],
    py: ["paddingTop", "paddingBottom"],

    placeItems: ["justifyContent", "alignItems"],
  },
});

const DisplayTypo = defineProperties({
  conditions: ResponsiveConditions,
  defaultCondition: "mobile",
  properties: {
    fontFamily: {
      default: "'Space Mono', monospace",
    },
    fontWeight: {
      default: 400,
    },
    fontSize: {
      mobile: 36,
      tablet: 45,
      desktop: 57,
    },
    lineHeight: {
      mobile: 44,
      tablet: 52,
      desktop: 64,
    },
    letterSpacing: {
      desktop: -0.25,
    },
  },
});

const HeadlineTypo = defineProperties({
  conditions: ResponsiveConditions,
  defaultCondition: "mobile",
  properties: {
    fontFamily: {
      default: "'Space Mono', monospace",
    },
    fontWeight: {
      default: 400,
    },
    fontSize: {
      mobile: 24,
      tablet: 28,
      desktop: 32,
    },
    lineHeight: {
      mobile: 32,
      tablet: 36,
      desktop: 40,
    },
  },
});

const TitleTypo = defineProperties({
  conditions: ResponsiveConditions,
  defaultCondition: "mobile",
  properties: {
    fontFamily: {
      default: "'Quicksand', sans-serif",
    },
    fontWeight: {
      mobile: 500,
      tablet: 500,
      desktop: 400,
    },
    fontSize: {
      mobile: 14,
      tablet: 16,
      desktop: 22,
    },
    lineHeight: {
      mobile: 20,
      tablet: 24,
      desktop: 28,
    },
    letterSpacing: {
      mobile: 0.1,
      tablet: 0.15,
      desktop: 0,
    },
  },
});

const BodyTypo = defineProperties({
  conditions: ResponsiveConditions,
  defaultCondition: "mobile",
  properties: {
    fontFamily: {
      default: "'Quicksand', sans-serif",
    },
    fontWeight: {
      default: 400,
    },
    fontSize: {
      mobile: 12,
      tablet: 14,
      desktop: 16,
    },
    lineHeight: {
      mobile: 16,
      tablet: 20,
      desktop: 24,
    },
    letterSpacing: {
      mobile: 0.4,
      tablet: 0.25,
      desktop: 0.5,
    },
  },
});

const LabelTypo = defineProperties({
  conditions: ResponsiveConditions,
  defaultCondition: "mobile",
  properties: {
    fontFamily: {
      default: "'Quicksand', sans-serif",
    },
    fontWeight: {
      default: 500,
    },
    fontSize: {
      mobile: 11,
      tablet: 12,
      desktop: 14,
    },
    lineHeight: {
      mobile: 16,
      tablet: 16,
      desktop: 20,
    },
    letterSpacing: {
      mobile: 0.5,
      tablet: 0.5,
      desktop: 0.1,
    },
  },
});

export const sprinkles = createSprinkles(
  ResponsiveProperties,
  DisplayTypo,
  HeadlineTypo,
  TitleTypo,
  BodyTypo,
  LabelTypo,
);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
