const plugin = require('tailwindcss/plugin')
const { remToVw } = require('../../util')

module.exports = plugin(function({ addBase, e, theme }) {
  addBase({
    ':root': {
      accentColor: theme('colors.teal.darker'),
    },
    html: {
      '-webkit-font-smoothing': 'subpixel-antialiased',
      '-moz-osx-font-smoothing': 'auto',
      fontSize: '100%',
      height: '100%',
      scrollBehavior: 'smooth',
    },
    body: {
      color: theme('textColor.gray.dark'),
      fontFamily: '"NewsGothic", Arial, sans-serif',
      fontSize: `clamp(${theme('fontSize.mdMin')}, ${remToVw(theme('fontSize.mdMax'))}, ${theme('fontSize.mdMax')})`,
      letterSpacing: theme('letterSpacing.md'),
      lineHeight: theme('lineHeight.md'),
      minHeight: '100%',
    },
    'h1, h2, h3, h4, h5, h6, blockquote, .text-balance': {
      textWrap: 'balance',
      whiteSpace: 'unset',
    },
    'sub, sup': {
      fontSize: '60%',
    },
    'strong, b, .font-bold': {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    '::selection': {
      backgroundColor: theme('colors.teal.light'),
      color: theme('colors.blue.dark'),
    },
    '.scrollbar-none': {
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    '.snap': {
      scrollSnapType: 'x mandatory',
    },
  });
});