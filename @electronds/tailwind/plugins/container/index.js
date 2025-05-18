const plugin = require('tailwindcss/plugin')

const baseStyles = {
  marginLeft: 'auto',
  marginRight: 'auto',
}

const container = plugin(
  function ({ matchComponents, theme }) {
    matchComponents(
      {
        container: (value) => ({
          ...baseStyles,
          maxWidth: `${value}`,
        }),
      },
      { values: theme('edsContainer') }
    )
  },
  {
    theme: {
      edsContainer: theme => ({
        ...theme('maxWidth'),
      }),
    },
  },
);

module.exports = container