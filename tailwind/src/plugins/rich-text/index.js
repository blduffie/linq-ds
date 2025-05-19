const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addBase, theme }) {
  addBase({
    '.rich-text h1': { fontSize: theme('fontSize.2xlMax'), marginBottom: theme('spacing.4') },
    '.rich-text p': { marginBottom: theme('spacing.4') },
  });
});
