const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
  addComponents({
    '.text-display': {
      fontSize: theme('fontSize.3xlMax'),
      lineHeight: theme('lineHeight.sm'),
      fontWeight: theme('fontWeight.bold'),
    },
    '.text-body': {
      fontSize: theme('fontSize.mdMax'),
      lineHeight: theme('lineHeight.md'),
    },
  });
});
