const plugin = require('tailwindcss/plugin');
const { remToVw } = require('../../util.js');

module.exports = plugin(function({ addBase, theme }) {
  addBase({
    ':root': {
      accentColor: theme('colors.blue.darker'),
    },
    html: {
      fontSize: '100%',
      height: '100%',
      scrollBehavior: 'smooth',
    },
    body: {
      color: theme('colors.gray.darker'),
      fontFamily: '"Work Sans", Arial, sans-serif',
      fontSize: `clamp(${theme('fontSize.mdMin')}, ${remToVw(theme('fontSize.mdMax'))}, ${theme('fontSize.mdMax')})`,
      letterSpacing: theme('letterSpacing.md'),
      lineHeight: theme('lineHeight.md'),
      minHeight: '100%',
    },
    '::selection': {
      backgroundColor: theme('colors.blue.light'),
      color: theme('colors.white'),
    },
  });
});
