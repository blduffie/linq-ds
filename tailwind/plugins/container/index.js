const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
  addComponents({
    '.container': {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: theme('spacing.4'),
      paddingRight: theme('spacing.4'),
    },
  });
});
