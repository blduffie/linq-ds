const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, theme }) {
  addUtilities({
    '.link': {
      color: theme('colors.blue.DEFAULT'),
      textDecoration: 'underline',
      '&:hover': {
        color: theme('colors.blue.dark'),
      },
    },
  });
});
