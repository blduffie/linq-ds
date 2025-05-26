const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addComponents, theme }) => {
  addComponents({
    ':where(.rich-text)': {
      '--lnq-rte-link-color': theme('colors.blue.DEFAULT'),
      '& a': {
        color: 'var(--lnq-rte-link-color)',
        textDecorationLine: 'underline',
        textDecorationThickness: '0.08em',
        textDecorationColor: 'var(--lnq-rte-link-color)',
        '&:hover': { textDecorationColor: 'transparent' },
      },
      '& ul li::marker,& ol li::marker': {
        color: theme('colors.blue.DEFAULT'),
      },
    },
  });
});
