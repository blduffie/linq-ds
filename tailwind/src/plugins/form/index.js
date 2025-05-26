const plugin = require('tailwindcss/plugin');
const { pxToRem } = require('../../util');

module.exports = plugin(({ addComponents, theme }) => {
  addComponents({
    '.form-input': {
      background: '#fff',
      border: `1px solid ${theme('colors.gray.DEFAULT')}`,
      borderRadius: theme('borderRadius.md'),
      padding: `${pxToRem(18)} ${pxToRem(16)} ${pxToRem(6)}`,
      fontSize: pxToRem(16),
      lineHeight: '1.2',
      width: '100%',
      transition: 'border-color 200ms,box-shadow 200ms',
      '&:hover': { borderColor: theme('colors.gray.dark') },
      '&:focus': {
        borderColor: theme('colors.blue.dark'),
        boxShadow: `0 0 0 ${pxToRem(3)} rgba(${hexToRgb(
          theme('colors.blue.dark')
        )},.4)`,
        outline: 'none',
      },
    },
    '.form-label': {
      pointerEvents: 'none',
      position: 'absolute',
      left: pxToRem(16),
      top: pxToRem(18),
      fontSize: pxToRem(16),
      color: theme('colors.text-secondary'),
      transition: 'all 200ms',
    },
    '.form-input:focus + .form-label,.form-input:not(:placeholder-shown)+.form-label':
      {
        top: pxToRem(6),
        fontSize: pxToRem(12),
        color: theme('colors.blue.dark'),
      },
  });
});
