const { pxToEm, pxToRem } = require('../util');

const edsSizingFixed = {
  px: '1px',
  '0': '0',
  '2': pxToRem(2),
  '4': pxToRem(4),
  '6': pxToRem(6),
  '8': pxToRem(8),
  '10': pxToRem(10),
  '12': pxToRem(12),
  '14': pxToRem(14),
  '16': pxToRem(16),
  '18': pxToRem(18),
  '20': pxToRem(20),
  '24': pxToRem(24),
  '28': pxToRem(28),
  '32': pxToRem(32),
  '36': pxToRem(36),
  '40': pxToRem(40),
  '44': pxToRem(44),
  '48': pxToRem(48),
  '52': pxToRem(52),
  '56': pxToRem(56),
  '64': pxToRem(64),
  '80': pxToRem(80),
  '96': pxToRem(96),
  '112': pxToRem(112),
  '128': pxToRem(128),
  '144': pxToRem(144),
  '160': pxToRem(160),
  '176': pxToRem(176),
  '192': pxToRem(192),
  '208': pxToRem(208),
  '224': pxToRem(224),
  '240': pxToRem(240),
  '256': pxToRem(256),
  '288': pxToRem(288),
  '320': pxToRem(320),
  '384': pxToRem(384),
};

const edsSizingPercentage = {
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

const edsSizingContent = {
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
};

const aria = {
  invalid: 'invalid="true"',
};

const aspectRatio = {
  '1/1': '1/1',
  '16/4': '16/4',
  '16/5': '16/5',
  '16/6': '16/6',
  '16/7': '16/7',
  '16/8': '16/8',
  '16/9': '16/9',
  '16/10': '16/10',
  '16/11': '16/11',
  '16/12': '16/12',
  '16/13': '16/13',
  '16/14': '16/14',
  '16/15': '16/15',
};

const backdropBlur = {
  xs: '2px',
};

const backgroundImage = {
  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
};

const borderColor = {
  input: '#b4b4b4',
};

const borderRadius = {
  none: '0',
  xs: pxToRem(2),
  sm: pxToRem(4),
  md: pxToRem(6),
  lg: pxToRem(16),
  xl: pxToRem(56),
  full: '9999px',
};

const borderWidth = {
  '6': '6px',
};

const boxShadow = {
  sm: `0 ${pxToRem(0.1)} ${pxToRem(0.3)} rgba(0, 0, 0, 0.1), 0 ${pxToRem(
    1,
  )} ${pxToRem(2)} rgba(0, 0, 0, 0.2)`,
  DEFAULT: `0 ${pxToRem(0.3)} ${pxToRem(0.5)} rgba(0, 0, 0, 0.1), 0 ${pxToRem(
    2,
  )} ${pxToRem(4)} rgba(0, 0, 0, 0.2)`,
  md: `0 ${pxToRem(0.5)} ${pxToRem(1)} rgba(0, 0, 0, 0.09), 0 ${pxToRem(
    4,
  )} ${pxToRem(8)} rgba(0, 0, 0, 0.18)`,
  lg: `0 ${pxToRem(1)} ${pxToRem(2)} rgba(0, 0, 0, 0.08), 0 ${pxToRem(
    8,
  )} ${pxToRem(16)} rgba(0, 0, 0, 0.16)`,
  xl: `0 ${pxToRem(2)} ${pxToRem(4)} rgba(0, 0, 0, 0.07), 0 ${pxToRem(
    16,
  )} ${pxToRem(32)} rgba(0, 0, 0, 0.14)`,
  '2xl': `0 ${pxToRem(4)} ${pxToRem(8)} rgba(0, 0, 0, 0.06), 0 ${pxToRem(
    32,
  )} ${pxToRem(64)} rgba(0, 0, 0, 0.12)`,
  none: 'none',
};

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000',
  white: '#fff',
  gray: {
    lighter: '#f2f4f4',
    light: '#dfe4e4',
    DEFAULT: '#d7d9da',
    dark: '#696969',
    darker: '#4c4c4c',
  },
  blue: {
    DEFAULT: '#005984',
    dark: '#014464',
  },
  teal: {
    lighter: '#f3fbfd',
    light: '#e0f6fb',
    DEFAULT: '#a7e1ea',
    dark: '#26bcd7',
    darker: '#00789e',
  },
  red: {
    DEFAULT: '#9e1b32',
    dark: '#8B0E04',
  },
  orange: {
    DEFAULT: '#f78e1e',
  },
  yellow: {
    DEFAULT: '#ffd200',
    dark: '#fdb913',
  },
  green: {
    DEFAULT: '#54b948',
    dark: '#00853f',
  },
};

const fontFamily = {
  sans: ['"NewsGothic"', 'Arial', 'sans-serif'],
};

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
  xlMax: pxToRem(27),
  '2xlMin': pxToRem(24),
  '2xlMax': pxToRem(40),
  '3xlMin': pxToRem(32),
  '3xlMax': pxToRem(54),
};

const fontWeight = {
  normal: '400',
  bold: '700',
};

const gridTemplateRows = {
  '0fr': '0fr',
  '1fr': '1fr',
};

const height = {
  auto: 'auto',
  ...edsSizingFixed,
  ...edsSizingContent,
  full: '100%',
  screen: '100vh',
};

const letterSpacing = {
  normal: '0',
  sm: pxToRem(0.16),
  md: pxToRem(0.4),
  lg: pxToRem(1),
};

const lineHeight = {
  none: '1',
  sm: '1.2',
  md: '1.6',
};

const listStyleType = {
  alpha: 'lower-alpha',
  circle: 'circle',
  square: 'square',
  roman: 'lower-roman',
};

const minHeight = {
  ...edsSizingFixed
};

const maxWidth = {
  '2xs': pxToRem(300),
  xs: pxToRem(400),
  sm: pxToRem(500),
  md: pxToRem(600),
  lg: pxToRem(670),
  xl: pxToRem(800),
  '2xl': pxToRem(900),
  '3xl': pxToRem(960),
  '4xl': pxToRem(1200),
  '5xl': pxToRem(1600),
};

const outlineWidth = {
  '3': '3px',
}

const ringWidth = {
  '6': '6px',
  '12': '12px',
  '24': '24px',
};

const scale = {
  flip: '-1',
  '102': '1.02',
};

const screens = {
  sm: pxToEm(640),
  md: pxToEm(768),
  lg: pxToEm(1024),
  xl: pxToEm(1280),
  '2xl': pxToEm(1552),
};

const spacing = {
  auto: 'auto',
  ...edsSizingFixed,
  '1/2': '50%',
};

const width = {
  auto: 'auto',
  ...edsSizingFixed,
  ...edsSizingPercentage,
  ...edsSizingContent,
  '80v': '80vw',
  screen: '100vw',
};

const zIndex = {
  auto: 'auto',
  hide: '-1',
  base: '0',
  dropdown: '100',
  popover: '200',
  tooltip: '300',
  banner: '400',
  nav: '500',
  header: '500',
  alert: '600',
  overlay: '900',
  modal: '950',
};

module.exports = {
  content: [],
  theme: {
    borderRadius,
    boxShadow,
    colors,
    fontFamily,
    fontSize,
    fontWeight,
    height,
    letterSpacing,
    lineHeight,
    screens,
    spacing,
    width,
    edsSizingFixed,
    extend: {
      animation: {
        ripple: 'ripple 1s ease-in-out once',
        click: 'click 1s ease-out',
        loader: 'loaderIn 250ms ease-out, loaderOpen 5s ease-out 250ms',
        shake: 'shake 300ms ease-in-out',
      },
      aria,
      aspectRatio,
      backdropBlur,
      backgroundImage,
      borderColor,
      borderWidth,
      gridTemplateRows,
      listStyleType,
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0, 0)', opacity: '1' },
          '40%': { transform: 'scale(30, 30)', opacity: '.5' },
          '100%': { transform: 'scale(40, 40)', opacity: '0' },
        },
        click: {
          '0%': { opacity: '.25', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(3)' },
        },
        loaderIn: {
          '0%': { opacity: '0', width: '60px', transform: 'scale(.6)' },
          '100%': { opacity: '1', width: '60px', transform: 'scale(1)' },
        },
        loaderOpen: {
          '0%': { width: '60px' },
          '10%': { width: '60px' },
          '100%': { width: '100%' },
        },
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        },
      },
      maxWidth,
      minHeight,
      outlineWidth,
      ringWidth,
      scale,
      zIndex,
    },
  },
  corePlugins: {
    container: false,
    fontSize: false,
  },
  plugins: [
    require('@tailwindcss/container-queries'), // Enable "container queries"
    require('../plugins/font-face'), // Create @font-face declarations
    require('../plugins/base'), // Create base styles
    require('../plugins/aspect-ratio'), // Create "aspect ratio" component classes
    require('../plugins/button'), // Create "button" component classes
    require('../plugins/container'), // Create "container" component classes
    require('../plugins/focus'), // Create focus/focus-visible base classes
    require('../plugins/form'), // Create "form" component classes
    require('../plugins/icon'), // Create "icon" component classes
    require('../plugins/identifier'), // Create "identifier" component classes
    require('../plugins/link'), // Create "link" component classes
    require('../plugins/logo'), // Create "logo" classes
    require('../plugins/typography'), // Create responsive typography
    require('../plugins/rich-text'), // Create "rich-text" component class
  ],
}