const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
  addComponents({
    '.form-input': {
      padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
      borderColor: theme('colors.gray.DEFAULT'),
      borderWidth: '1px',
      borderRadius: theme('borderRadius.sm'),
      '&:focus': {
        outline: 'none',
        borderColor: theme('colors.blue.DEFAULT'),
      },
    },
  });
});
