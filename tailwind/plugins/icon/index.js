const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities }) {
  addUtilities({
    '.icon': {
      display: 'inline-block',
      width: '1em',
      height: '1em',
      fill: 'currentColor',
    },
  });
});
