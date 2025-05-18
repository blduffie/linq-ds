const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities, theme }) {
  addUtilities({
    '.focus-ring': {
      outline: `2px solid ${theme('colors.blue.DEFAULT')}`,
      outlineOffset: '2px',
    },
  }, ['focus']);
});
