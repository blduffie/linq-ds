const { pxToRem, pxToEm } = require('../util');

const linqSizingFixed = {
  px: '1px',
  0: '0',
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
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  '1/29': '29%',
  full: '100%',
};
const linqSizingContent = {
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
};

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  white: '#fff',
  black: '#000',
  blue: {
    lighter: '#6ee4eb',
    light: '#1baac1',
    DEFAULT: '#007897',
    dark: '#005070',
    darker: '#0f2d4a',
  },
  green: {
    lighter: '#b8efd8',
    light: '#8bdfbc',
    DEFAULT: '#3ebe89',
    dark: '#04814d',
    darker: '#02462a',
  },
  orange: {
    lighter: '#fee4c4',
    light: '#fcd39e',
    DEFAULT: '#f8a02d',
    dark: '#c37106',
    darker: '#905305',
  },
  red: {
    lighter: '#fdcfcb',
    light: '#f8968f',
    DEFAULT: '#f35f54',
    dark: '#be362c',
    darker: '#8c2821',
  },
  gray: {
    lighter: '#f7f7f7',
    light: '#e8e8e8',
    DEFAULT: '#d0d0d0',
    dark: '#898989',
    darker: '#5b5b5b',
  },
  'text-primary': '#0f2d4a',
  'text-secondary': '#5b6b7a',
  'text-tertiary': '#677888',
  'text-disabled': '#b8b8b8',
  error: '#d43127',
};

const fontFamily = { sans: ['"Work Sans"', 'Arial', 'sans-serif'] };
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
  '2xlMin': pxToRem(24),
  '2xlMax': pxToRem(40),
  '3xlMin': pxToRem(32),
  '3xlMax': pxToRem(54),
};
const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};
const letterSpacing = {
  normal: '0',
  sm: pxToRem(0.16),
  md: pxToRem(0.4),
  lg: pxToRem(1),
};
const lineHeight = { none: '1', sm: '1.2', md: '1.6' };

const borderRadius = {
  none: '0',
  xs: pxToRem(2),
  sm: pxToRem(4),
  md: pxToRem(8),
  lg: pxToRem(24),
  xl: pxToRem(64),
  full: '9999px',
};
const boxShadow = {
  xs: `0 ${pxToRem(1)} ${pxToRem(2)} rgba(15,45,74,.04)`,
  sm: `0 ${pxToRem(1)} ${pxToRem(3)} rgba(34,34,34,.06),0 ${pxToRem(
    1
  )} ${pxToRem(2)} rgba(34,34,34,.10)`,
  md: `0 ${pxToRem(2)} ${pxToRem(4)} rgba(34,34,34,.06),0 ${pxToRem(
    4
  )} ${pxToRem(8)} rgba(34,34,34,.10)`,
  lg: `0 ${pxToRem(4)} ${pxToRem(6)} rgba(34,34,34,.04),0 ${pxToRem(
    12
  )} ${pxToRem(16)} rgba(34,34,34,.08)`,
  xl: `0 ${pxToRem(8)} ${pxToRem(8)} rgba(34,34,34,.04),0 ${pxToRem(
    20
  )} ${pxToRem(24)} rgba(34,34,34,.08)`,
  '2xl': `0 ${pxToRem(24)} ${pxToRem(48)} rgba(34,34,34,.18)`,
  '3xl': `0 ${pxToRem(32)} ${pxToRem(64)} rgba(34,34,34,.14)`,
  none: 'none',
};
const screens = {
  sm: pxToEm(640),
  md: pxToEm(768),
  lg: pxToEm(1024),
  xl: pxToEm(1280),
  '2xl': pxToEm(1552),
};


const linqCorePreset = {
  content: [],
  theme: {
    colors,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    borderRadius,
    boxShadow,
    screens,
    height: {
      auto: 'auto',
      ...linqSizingFixed,
      ...linqSizingContent,
      full: '100%',
      screen: '100vh',
    },
    spacing: { auto: 'auto', ...linqSizingFixed, '1/2': '50%' },
    width: {
      auto: 'auto',
      ...linqSizingFixed,
      ...linqSizingPercentage,
      ...linqSizingContent,
      '80v': '80vw',
      screen: '100vw',
    },
    linqSizingFixed,
  },
  corePlugins: { container: false, fontSize: false },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('../plugins/font-face'),
    require('../plugins/base'),
    require('../plugins/aspect-ratio'),
    require('../plugins/button'),
    require('../plugins/container'),
    require('../plugins/focus'),
    require('../plugins/form'),
    require('../plugins/icon'),
    require('../plugins/identifier'),
    require('../plugins/link'),
    require('../plugins/logo'),
    require('../plugins/typography'),
    require('../plugins/rich-text'),
  ],
};
module.exports = linqCorePreset;