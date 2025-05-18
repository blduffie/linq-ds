/*─────────────────────────────────────────────────────────────────────────────*\
│ LINQ Design System · Tailwind “core” preset                                  │
│                                                                             │
│ Purpose                                                                     │
│ -------                                                                     │
│ • Drops LINQ’s **brand tokens** (colors, fonts, radii, shadows, focus ring) │
│   into the LING Tailwind core.                                       │
│ • Leaves all **brand-agnostic utilities**—spacing maps, breakpoint ems,     │
│   aspect-ratio helpers, plugin registrations—exactly as they ship in the    │
│   original Tailwind core.                                                │
│ • Generated from the Figma design-token export dated **2025-05-13**.        │
│                                                                             │
│ How to consume                                                              │
│ --------------                                                              │
│   // tailwind.config.js in an app                                           │
│   module.exports = {                                                        │
│     presets: [require('@linq/tailwind/config/core-linq')],            │
│   };                                                                        │
│                                                                             │
│ Maintenance                                                                 │
│ ----------                                                                  │
│ • When the Figma tokens change, update the brand sections below (colors,    │
│   fontFamily, borderRadius, boxShadow, etc.).                               │
│ • Keep the shared utility sections in sync with `config/core.js` unless     │
│   LINQ intentionally diverges.                                              │
│                                                                             │
│ Author   : Bronwyn Duffield <bronwyn.duffield@linq.com>                     │
│ Version  : 2.0.0                                                            │
\*─────────────────────────────────────────────────────────────────────────────*/



const linqSizingFixed = {
  px: "1px",
  0: "0",
  2: pxToRem(2),
  4: pxToRem(4),
  6: pxToRem(6),
  8: pxToRem(8),
  10: pxToRem(10),
  12: pxToRem(12),
  14: pxToRem(14),
  16: pxToRem(16),
  18: pxToRem(18),
  20: pxToRem(20),
  24: pxToRem(24),
  28: pxToRem(28),
  32: pxToRem(32),
  36: pxToRem(36),
  40: pxToRem(40),
  44: pxToRem(44),
  48: pxToRem(48),
  52: pxToRem(52),
  56: pxToRem(56),
  64: pxToRem(64),
  80: pxToRem(80),
  96: pxToRem(96),
  112: pxToRem(112),
  128: pxToRem(128),
  144: pxToRem(144),
  160: pxToRem(160),
  176: pxToRem(176),
  192: pxToRem(192),
  208: pxToRem(208),
  224: pxToRem(224),
  240: pxToRem(240),
  256: pxToRem(256),
  288: pxToRem(288),
  320: pxToRem(320),
  384: pxToRem(384),
};
const linqSizingPercentage = {
  "1/2": "50%",
  "1/3": "33.333333%",
  "2/3": "66.666667%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666667%",
  "2/6": "33.333333%",
  "3/6": "50%",
  "4/6": "66.666667%",
  "5/6": "83.333333%",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
  "1/29": "29%",
  full: "100%",
};
const linqSizingContent = {
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
};

const borderRadius = {
  none: "0",
  xs: pxToRem(2),
  sm: pxToRem(4),
  md: pxToRem(8),
  lg: pxToRem(24),
  xl: pxToRem(64),
  full: "9999px",
};

const boxShadow = {
  xs: `0 ${pxToRem(1)} ${pxToRem(2)} rgba(15,45,74,.04)`,
  sm: `0 ${pxToRem(1)} ${pxToRem(3)} rgba(34,34,34,.06), 0 ${pxToRem(
    1
  )} ${pxToRem(2)} rgba(34,34,34,.10)`,
  md: `0 ${pxToRem(2)} ${pxToRem(4)} rgba(34,34,34,.06), 0 ${pxToRem(
    4
  )} ${pxToRem(8)} rgba(34,34,34,.10)`,
  lg: `0 ${pxToRem(4)} ${pxToRem(6)} rgba(34,34,34,.04), 0 ${pxToRem(
    12
  )} ${pxToRem(16)} rgba(34,34,34,.08)`,
  xl: `0 ${pxToRem(8)} ${pxToRem(8)} rgba(34,34,34,.04), 0 ${pxToRem(
    20
  )} ${pxToRem(24)} rgba(34,34,34,.08)`,
  "2xl": `0 ${pxToRem(24)} ${pxToRem(48)} rgba(34,34,34,.18)`,
  "3xl": `0 ${pxToRem(32)} ${pxToRem(64)} rgba(34,34,34,.14)`,
  none: "none",
};

/* Primary Linq palette → mapped into five-step scales */
const colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000",
  white: "#fff",

  /* brand blues: Beam → Sky → Daybreak → Twilight → Midnight */
  blue: {
    lighter: "#6ee4eb", // Beam
    light: "#1baac1", // Sky
    DEFAULT: "#007897", // Daybreak
    dark: "#005070", // Twilight
    darker: "#0f2d4a", // Midnight
  },

  /* palette-green 50 → 100 → 300 → 600 → 800 */
  green: {
    lighter: "#b8efd8",
    light: "#8bdfbc",
    DEFAULT: "#3ebe89",
    dark: "#04814d",
    darker: "#02462a",
  },

  /* palette-orange 50 → 100 → 400 → 600 → 700 */
  orange: {
    lighter: "#fee4c4",
    light: "#fcd39e",
    DEFAULT: "#f8a02d",
    dark: "#c37106",
    darker: "#905305",
  },

  /* palette-red 50 → 200 → 400 → 600 → 700 */
  red: {
    lighter: "#fdcfcb",
    light: "#f8968f",
    DEFAULT: "#f35f54",
    dark: "#be362c",
    darker: "#8c2821",
  },

  /* greys 25 → 50 → 100 → 400 → 600 */
  gray: {
    lighter: "#f7f7f7",
    light: "#e8e8e8",
    DEFAULT: "#d0d0d0",
    dark: "#898989",
    darker: "#5b5b5b",
  },

  /* semantic aliases */
  "text-primary": "#0f2d4a",
  "text-secondary": "#5b6b7a",
  "text-tertiary": "#677888",
  "text-disabled": "#b8b8b8",
  "text-inverse": "#fff",
  "border-primary": "#bfccce",
  "border-active": "#007897",
  error: "#d43127",
};

const fontFamily = { sans: ['"Work Sans"', "Arial", "sans-serif"] };

const fontSize = {
  xsMin: pxToRem(12),
  xsMax: pxToRem(12),
  smMin: pxToRem(14),
  smMax: pxToRem(14),
  mdMin: pxToRem(16),
  mdMax: pxToRem(16),
  lgMin: pxToRem(18),
  lgMax: pxToRem(18),
  xlMin: pxToRem(20),
  xlMax: pxToRem(30),
  "2xlMin": pxToRem(24),
  "2xlMax": pxToRem(40),
  "3xlMin": pxToRem(32),
  "3xlMax": pxToRem(54),
};

const fontWeight = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
};

const screens = {
  sm: pxToEm(640),
  md: pxToEm(768),
  lg: pxToEm(1024),
  xl: pxToEm(1280),
  "2xl": pxToEm(1552),
};

const height = {
  auto: "auto",
  ...linqSizingFixed,
  ...linqSizingContent,
  full: "100%",
  screen: "100vh",
};
const spacing = { auto: "auto", ...linqSizingFixed, "1/2": "50%" };
const width = {
  auto: "auto",
  ...linqSizingFixed,
  ...linqSizingPercentage,
  ...linqSizingContent,
  "80v": "80vw",
  screen: "100vw",
};
/* … (gridTemplateRows, maxWidth, outlineWidth, etc. unchanged; keep them from the original core file) */

module.exports = {
  content: [],
  theme: {
    colors,
    fontFamily,
    fontSize,
    fontWeight,
    borderRadius,
    boxShadow,
    height,
    screens,
    spacing,
    width,
    linqSizingFixed,

    extend: {
      aria: { invalid: 'invalid="true"' },
      aspectRatio: { "1/1": "1/1", "16/9": "16/9", "4/3": "4/3" },
      backdropBlur: { xs: "2px" },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      borderColor: { input: "#bfccce" },
      borderWidth: { 6: "6px" },
      maxWidth: {
        "2xs": pxToRem(300),
        xs: pxToRem(400),
        sm: pxToRem(500),
        md: pxToRem(600),
        lg: pxToRem(670),
        xl: pxToRem(800),
        "2xl": pxToRem(900),
        "3xl": pxToRem(960),
        "4xl": pxToRem(1200),
        "5xl": pxToRem(1600),
      },
      minHeight: { ...linqSizingFixed },
      outlineWidth: { 3: "3px" },
      ringWidth: { 6: "6px", 12: "12px", 24: "24px" },
      scale: { flip: "-1", 102: "1.02" },
      zIndex: {
        auto: "auto",
        hide: "-1",
        base: "0",
        dropdown: "100",
        popover: "200",
        tooltip: "300",
        banner: "400",
        nav: "500",
        header: "500",
        alert: "600",
        overlay: "900",
        modal: "950",
      },
    },
  },

  corePlugins: {
    container: false,
    fontSize: false,
  },

  plugins: [
    require("@tailwindcss/container-queries")
  ],
};
