const plugin = require('tailwindcss/plugin');
const { pxToRem } = require('../../util');

module.exports = plugin(
  ({ matchComponents, theme }) => {
    matchComponents(
      { icon: (v) => ({ height: v, width: v }) },
      { values: theme('linqIcon') }
    );
  },
  { theme: { linqIcon: (theme) => ({ ...theme('linqSizingFixed') }) } }
);
