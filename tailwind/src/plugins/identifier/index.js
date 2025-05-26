const plugin = require('tailwindcss/plugin');
const { pxToRem } = require('../../util');

module.exports = plugin(
  ({ matchComponents, theme }) => {
    matchComponents(
      { identifier: (v) => ({ width: 'auto', height: v }) },
      { values: theme('linqIdentifier') }
    );
  },
  {
    theme: {
      linqIdentifier: {
        'single-sm': pxToRem(12),
        single: pxToRem(20),
        'double-sm': pxToRem(24),
        double: pxToRem(40),
      },
    },
  }
);

