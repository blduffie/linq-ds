const plugin = require('tailwindcss/plugin');
const { pxToRem, remToVw } = require('../../util');

module.exports = plugin(({ addBase, theme }) => {
  addBase({
    ':root': { accentColor: theme('colors.blue.DEFAULT') },
    html: {
      '-webkit-font-smoothing': 'subpixel-antialiased',
      '-moz-osx-font-smoothing': 'auto',
      fontSize: '100%',
      height: '100%',
      scrollBehavior: 'smooth',
    },
    body: {
      color: theme('colors.gray.dark'),
      fontFamily: '"Work Sans", Arial, sans-serif',
      fontSize: `clamp(${theme('fontSize.mdMin')},${remToVw(
        theme('fontSize.mdMax')
      )},${theme('fontSize.mdMax')})`,
      letterSpacing: theme('letterSpacing.md'),
      lineHeight: theme('lineHeight.md'),
      minHeight: '100%',
    },
    '::selection': {
      backgroundColor: theme('colors.blue.light'),
      color: theme('colors.blue.darker'),
    },
  });
});