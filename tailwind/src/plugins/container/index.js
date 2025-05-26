const plugin = require('tailwindcss/plugin');
const { pxToRem } = require('../../util');

module.exports = plugin(
  ({ matchComponents, theme }) => {
    matchComponents(
      {
        container: (v) => ({
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: `${v}`,
        }),
      },
      { values: theme('linqContainer') }
    );
  },
  { theme: { linqContainer: (theme) => ({ ...theme('maxWidth') }) } }
);
