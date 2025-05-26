const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  ({ addComponents, theme, e }) => {
    const map = {
      xs: {
        min: theme('fontSize.xsMin'),
        max: theme('fontSize.xsMax'),
        calc: '0.75rem+0vw',
      },
      sm: {
        min: theme('fontSize.smMin'),
        max: theme('fontSize.smMax'),
        calc: '0.875rem+0vw',
      },
      md: {
        min: theme('fontSize.mdMin'),
        max: theme('fontSize.mdMax'),
        calc: '1rem+0vw',
      },
      lg: {
        min: theme('fontSize.lgMin'),
        max: theme('fontSize.lgMax'),
        calc: '1.125rem+0vw',
      },
      xl: {
        min: theme('fontSize.xlMin'),
        max: theme('fontSize.xlMax'),
        calc: '0.7451rem+1.6827vw',
      },
      '2xl': {
        min: theme('fontSize.2xlMin'),
        max: theme('fontSize.2xlMax'),
        calc: '0.34615rem+3.8461vw',
      },
      '3xl': {
        min: theme('fontSize.3xlMin'),
        max: theme('fontSize.3xlMax'),
        calc: '0.4134rem+5.2884vw',
      },
    };
    addComponents([
      ...Object.entries(map).map(([k, v]) => ({
        [`.${e(`text-${k}`)}`]: {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          fontSize: `clamp(${v.min},${v.calc},${v.max})`,
          lineHeight: theme('lineHeight.md'),
          letterSpacing: theme('letterSpacing.md'),
        },
      })),
    ]);
  }
);