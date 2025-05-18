const { pxToRem } = require('../../util')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addBase, e, theme }) {
  addBase({
    'a, button, div, input, select, textarea': {
      '&:focus:not(:focus-visible)': {
        outline: 'none',
      },
      '&:focus-visible': {
        outline: '-webkit-focus-ring-color auto 1px',
      },
    },
    'a, button, div': {
      '&:focus-visible': {
        outline: `${pxToRem(4)} dotted currentColor`,
        outlineOffset: pxToRem(2),
      },
    },
  });
});
