const plugin = require('tailwindcss/plugin');
const { pxToRem } = require('../../util');

module.exports = plugin(({ addUtilities, theme, e }) => {
  const vals = { underline: 'currentColor', 'no-underline': 'transparent' };
  const carets = {
    chevron: { h: '0.625em', ml: 'clamp(6px,.375em,8px)', mr: '0' },
    'chevron-back': { h: '0.75em', ml: '0', mr: 'clamp(6px,.375em,8px)' },
    arrow: { h: '0.375em', ml: 'clamp(6px,.375em,8px)', mr: '0' },
  };
  addUtilities([
    ...Object.entries(vals).map(([k, v]) => ({
      [`.${e(k)}`]: {
        textDecorationColor: v,
        textDecorationLine: 'underline',
        textDecorationThickness: '0.08em',
        textUnderlineOffset: '0.125rem',
      },
    })),
    ...Object.entries(carets).map(([k, { h, ml, mr }]) => ({
      [`.${e(`link-${k}`)}`]: { height: h, marginLeft: ml, marginRight: mr },
    })),
  ]);
});
