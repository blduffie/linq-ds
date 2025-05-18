const plugin = require('tailwindcss/plugin')
const { pxToRem } = require('../../util')

const baseStyles = {
  width: 'auto',
}

const logo = plugin(
  function({ matchComponents, theme }) {
    matchComponents(
      {
        logo: (value) => ({
          ...baseStyles,
          height: `${value}`,
        }),
      },
      { values: theme('edsLogo') }
    )
  },
  {
    theme: {
      edsLogo: {
        'de-sm': pxToRem(26),
        'de': pxToRem(42),
        'subbrand-sm': pxToRem(34),
        'subbrand': pxToRem(58),
      },
    },
  },
);

module.exports = logo