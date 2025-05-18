const plugin = require('tailwindcss/plugin')
const { pxToRem } = require('../../util')

const baseStyles = {
  width: 'auto',
}

const identifier = plugin(
  function ({ matchComponents, theme }) {
    matchComponents(
      {
        identifier: (value) => ({
          ...baseStyles,
          height: `${value}`,
        }),
      },
      { values: theme('edsIdentifier') }
    )
  },
  {
    theme: {
      edsIdentifier: {
        'single-sm': pxToRem(12),
        'single': pxToRem(20),
        'double-sm': pxToRem(24),
        'double': pxToRem(40),
      },
    },
  },
)

module.exports = identifier