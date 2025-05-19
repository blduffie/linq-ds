const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, theme }) {
  addUtilities({
    '.linq-identifier': {
      fontSize: theme('fontSize.smMax'),
      fontWeight: theme('fontWeight.bold'),
      color: theme('colors.blue.dark'),
    },
  });
});
