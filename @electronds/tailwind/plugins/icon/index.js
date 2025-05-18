const plugin = require('tailwindcss/plugin')

const icon = plugin(
  function ({ matchComponents, theme }) {
    matchComponents(
      {
        'icon': (value) => ({
          height: `${value}`,
          width: `${value}`,
        }),
      },
      { values: theme('edsIcon') }
    )
  },
  {
    theme: {
      edsIcon: theme => ({
        ...theme('edsSizingFixed'),
      }),
    },
    variants: {
      edsIcon: ['responsive'],
    },
  },
)

module.exports = icon