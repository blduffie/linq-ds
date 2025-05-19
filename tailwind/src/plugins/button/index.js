const plugin = require('tailwindcss/plugin');
const { pxToRem } = require('../../src/util.js');

module.exports = plugin(function({ addComponents, theme }) {
  addComponents({
    '.btn': {
      alignItems: 'center',
      backgroundColor: theme('colors.blue.DEFAULT'),
      color: theme('colors.white'),
      padding: `${theme('padding.2')} ${theme('padding.4')}`,
      borderRadius: theme('borderRadius.md'),
      fontWeight: theme('fontWeight.semibold'),
      display: 'inline-flex',
      gap: pxToRem(4),
      '&:hover': {
        backgroundColor: theme('colors.blue.dark'),
      },
      '&:active': {
        backgroundColor: theme('colors.blue.darker'),
      },
    },
  });
});
