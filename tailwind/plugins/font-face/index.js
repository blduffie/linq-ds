const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addBase }) {
  addBase({
    '@font-face': {
      fontFamily: 'Work Sans',
      fontStyle: 'normal',
      fontWeight: '400',
      src: "url('fonts/WorkSans-Regular.woff2') format('woff2')",
    },
  });
});
