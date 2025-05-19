const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities }) {
  addUtilities({
    '.aspect-square': {
      aspectRatio: '1 / 1',
    },
    '.aspect-video': {
      aspectRatio: '16 / 9',
    },
  });
});
