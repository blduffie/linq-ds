const plugin = require('tailwindcss/plugin');

const link = plugin(
  function({ addUtilities, theme, variants, e }) {
    const values = theme('edsLink');
    const carets = theme('edsLinkCaret');

    addUtilities(
      [
        Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`${key}`)}`]: {
              textDecorationColor: `${value}`,
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationThickness: '0.08em',
              textUnderlineOffset: '0.125rem',
              transition: 'text-decoration-color 150ms ease-in-out',
            },
          };
        }),
        Object.entries(carets).map(
          ([key, { height, marginLeft, marginRight }]) => {
            return {
              [`.${e(`link-${key}`)}`]: {
                height: `${height}`,
                marginLeft: `${marginLeft}`,
                marginRight: `${marginRight}`,
              },
            };
          },
        ),
        {
          '.link-block::after': {
            content: '""',
            inset: '0',
            position: 'absolute',
            zIndex: theme('zIndex.10'),
          },
        },
      ],
      variants('edsLink'),
    );
  },
  {
    theme: {
      edsLink: {
        underline: 'currentColor',
        'no-underline': 'transparent',
      },
      edsLinkCaret: {
        chevron: {
          height: '0.625em',
          marginLeft: 'clamp(6px, .375em, 8px)',
          marginRight: '0',
        },
        'chevron-back': {
          height: '0.75em',
          marginLeft: '0',
          marginRight: 'clamp(6px, .375em, 8px)',
        },
        arrow: {
          height: '0.375em',
          marginLeft: 'clamp(6px, .375em, 8px)',
          marginRight: '0',
        },
      },
    },
    variants: {
      edsLink: ['hover'],
    },
  },
);

module.exports = link;
