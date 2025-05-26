const plugin = require('tailwindcss/plugin');
const { pxToRem } = require('../../util');

module.exports = plugin(({ addBase, theme }) => {
  addBase({
    'a,button,div': {
      '&:focus-visible': {
        outline: `${pxToRem(4)} dotted currentColor`,
        outlineOffset: pxToRem(2),
      },
    },
  });
});