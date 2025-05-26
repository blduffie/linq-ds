const plugin = require('tailwindcss/plugin');
const { pxToRem } = require('../../util');

module.exports = plugin(
  ({ addComponents, theme, e }) => {
    const values = theme('aspectRatio', {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    });
    const baseSelectors = Object.keys(values)
      .map((k) => `.${e(`aspect-w-${k}`)}`)
      .join(',');
    const childSelectors = Object.keys(values)
      .map((k) => `.${e(`aspect-w-${k}`)} > *`)
      .join(',');
    addComponents([
      {
        [baseSelectors]: {
          position: 'relative',
          paddingBottom: 'calc(var(--tw-aspect-h)/var(--tw-aspect-w)*100%)',
        },
        [childSelectors]: {
          position: 'absolute',
          inset: '0',
          width: '100%',
          height: '100%',
        },
        '.aspect-none': { position: 'static', paddingBottom: '0' },
        '.aspect-none > *': {
          position: 'static',
          width: 'auto',
          height: 'auto',
        },
      },
      ...Object.entries(values).map(([k, v]) => ({
        [`.${e(`aspect-w-${k}`)}`]: { '--tw-aspect-w': v },
      })),
      ...Object.entries(values).map(([k, v]) => ({
        [`.${e(`aspect-h-${k}`)}`]: { '--tw-aspect-h': v },
      })),
    ]);
  }
);