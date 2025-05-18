const plugin = require('tailwindcss/plugin')
const { remToVw } = require('../../util')

const typography = plugin(
  function ({ addComponents, theme, variants, e }) {
    const values = theme('edsTypography');

    addComponents(
      [
        Object.entries(values).map(
          ([key, { fontSize, lineHeight, letterSpacing, fontSmoothing }]) => {
            return {
              [`.${e(`text-${key}`)}`]: {
                ...(fontSmoothing ? {
                  '-webkit-font-smoothing': 'antialiased',
                  '-moz-osx-font-smoothing': 'grayscale',
                } : {}),
                fontSize: `clamp(${fontSize.min}, ${fontSize.calc}, ${fontSize.max})`,
                letterSpacing: `${letterSpacing}`,
                lineHeight: `${lineHeight}`,
              },
            };
          },
        ),
      ],
      variants('edsTypography'),
    );
  },
  {
    theme: {
      edsTypography: theme => ({
        xs: {
          fontSize: {
            min: theme('fontSize.xsMin'),
            max: theme('fontSize.xsMax'),
            calc: '0.75rem + 0vw',
          },
          lineHeight: theme('lineHeight.md'),
          letterSpacing: theme('letterSpacing.sm'),
        },
        sm: {
          fontSize: {
            min: theme('fontSize.smMin'),
            max: theme('fontSize.smMax'),
            calc: '0.875rem + 0vw',
          },
          lineHeight: theme('lineHeight.md'),
          letterSpacing: theme('letterSpacing.sm'),
        },
        md: {
          fontSize: {
            min: theme('fontSize.mdMin'),
            max: theme('fontSize.mdMax'),
            calc: '1rem + 0vw',
          },
          lineHeight: theme('lineHeight.md'),
          letterSpacing: theme('letterSpacing.md'),
        },
        lg: {
          fontSize: {
            min: theme('fontSize.lgMin'),
            max: theme('fontSize.lgMax'),
            calc: '1.125rem + 0vw',
          },
          lineHeight: '1.4',
          letterSpacing: theme('letterSpacing.md'),
          fontSmoothing: true,
        },
        xl: {
          fontSize: {
            min: theme('fontSize.xlMin'),
            max: theme('fontSize.xlMax'),
            calc: '0.7451923076923076rem + 1.682692307692308vw',
          },
          lineHeight: '1.3',
          letterSpacing: theme('letterSpacing.lg'),
          fontSmoothing: true,
        },
        '2xl': {
          fontSize: {
            min: theme('fontSize.2xlMin'),
            max: theme('fontSize.2xlMax'),
            calc: '0.34615384615384603rem + 3.8461538461538463vw',
          },
          lineHeight: theme('lineHeight.sm'),
          letterSpacing: theme('letterSpacing.lg'),
          fontSmoothing: true,
        },
        '3xl': {
          fontSize: {
            min: theme('fontSize.3xlMin'),
            max: theme('fontSize.3xlMax'),
            calc: '0.4134615384615383rem + 5.288461538461539vw',
          },
          lineHeight: theme('lineHeight.sm'),
          letterSpacing: theme('letterSpacing.lg'),
          fontSmoothing: true,
        },
        'xl-fixed': {
          fontSize: {
            min: theme('fontSize.xlMax'),
            max: theme('fontSize.xlMax'),
            calc: '1.6875rem + 0vw',
          },
          lineHeight: theme('lineHeight.sm'),
          letterSpacing: theme('letterSpacing.lg'),
          fontSmoothing: true,
        },
        '2xl-fixed': {
          fontSize: {
            min: theme('fontSize.2xlMax'),
            max: theme('fontSize.2xlMax'),
            calc: '2.5rem + 0vw',
          },
          lineHeight: theme('lineHeight.sm'),
          letterSpacing: theme('letterSpacing.lg'),
          fontSmoothing: true,
        },
        '3xl-fixed': {
          fontSize: {
            min: theme('fontSize.3xlMax'),
            max: theme('fontSize.3xlMax'),
            calc: '3.375rem + 0vw',
          },
          lineHeight: theme('lineHeight.sm'),
          letterSpacing: theme('letterSpacing.lg'),
          fontSmoothing: true,
        },
      }),
    },
    variants: {
      edsTypography: ['responsive'],
    },
  },
);

module.exports = typography;