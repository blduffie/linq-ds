const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  ({ matchComponents, theme }) => {
    matchComponents(
      { logo: (v) => ({ width: 'auto', height: v }) },
      { values: theme('linqLogo') }
    );
  },
  { theme: { linqLogo: { 'linq-sm': pxToRem(26), linq: pxToRem(42) } } }
);

