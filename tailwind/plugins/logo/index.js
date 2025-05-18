const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities }) {
  addUtilities({
    '.linq-logo': {
      display: 'inline-block',
      height: '40px',
      width: 'auto',
    },
  });
});
