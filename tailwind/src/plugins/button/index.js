const plugin = require('tailwindcss/plugin');
const { pxToRem } = require('../../util');

module.exports = plugin(
  ({ addComponents, theme, e }) => {
    const styles = theme('linqButtonStyle');
    const sizes = theme('linqButtonSize');
    const widths = theme('linqButtonWidth');
    const shapes = theme('linqButtonShape');
    addComponents([
      {
        /* base .btn */
        '.btn': {
          alignItems: 'center',
          display: 'inline-flex',
          justifyContent: 'center',
          gap: pxToRem(6),
          cursor: 'pointer',
          transition: 'color 200ms,border 200ms,background 200ms',
          verticalAlign: 'middle',
          position: 'relative',
          borderStyle: 'solid',
          borderWidth: '1px',
          backgroundColor:
            'var(--lnq-btn-bg, ' + theme('colors.blue.DEFAULT') + ')',
          borderColor:
            'var(--lnq-btn-border, ' + theme('colors.blue.DEFAULT') + ')',
          color: 'var(--lnq-btn-text, #fff)',
          borderRadius:
            'var(--lnq-btn-radius,' + theme('borderRadius.md') + ')',
          fontSize: 'var(--lnq-btn-font,' + pxToRem(16) + ')',
          height: 'var(--lnq-btn-height,' + pxToRem(56) + ')',
          padding: `${pxToRem(8)} var(--lnq-btn-px, ${pxToRem(24)}) 0`,
          '&:hover': {
            backgroundColor:
              'var(--lnq-btn-bg-hover,' + theme('colors.blue.dark') + ')',
            borderColor:
              'var(--lnq-btn-border-hover,' + theme('colors.blue.dark') + ')',
          },
          '&:focus-visible': {
            outline: `${pxToRem(4)} dotted var(--lnq-btn-outline, ${theme(
              'colors.blue.dark'
            )})`,
            outlineOffset: pxToRem(2),
          },
          '&:disabled': { cursor: 'not-allowed', opacity: '.4' },
        },
      },
      /* variant tokens */
      ...Object.entries(styles).map(([key, { base, hover, focus }]) => ({
        [`.${e(`btn-${key}`)}`]: {
          '--lnq-btn-bg': base.background,
          '--lnq-btn-border': base.border,
          '--lnq-btn-text': base.text,
          '--lnq-btn-bg-hover': hover.background,
          '--lnq-btn-border-hover': hover.border,
          '--lnq-btn-text-hover': hover.text,
          '--lnq-btn-outline': focus.outline,
        },
      })),
      /* size tokens */
      ...Object.entries(sizes).map(([key, val]) => ({
        [`.${e(`btn-${key}`)}`]: {
          '--lnq-btn-font': val.font,
          '--lnq-btn-height': val.height,
          '--lnq-btn-px': val.px,
        },
      })),
      /* width tokens */
      ...Object.entries(widths).map(([k, v]) => ({
        [`.${e(`btn-${k}`)}`]: { '--lnq-btn-width': v },
      })),
      /* shape tokens */
      ...Object.entries(shapes).map(([k, v]) => ({
        [`.${e(`btn-${k}`)}`]: { '--lnq-btn-radius': v },
      })),
    ]);
  },
  {
    theme: {
      linqButtonStyle: (theme) => ({
        primary: {
          base: {
            background: theme('colors.blue.DEFAULT'),
            border: theme('colors.blue.DEFAULT'),
            text: theme('colors.white'),
          },
          hover: {
            background: theme('colors.blue.dark'),
            border: theme('colors.blue.dark'),
            text: '#fff',
          },
          focus: { outline: theme('colors.blue.dark') },
        },
        secondary: {
          base: {
            background: 'transparent',
            border: theme('colors.blue.DEFAULT'),
            text: theme('colors.blue.DEFAULT'),
          },
          hover: {
            background: theme('colors.blue.lighter'),
            border: theme('colors.blue.DEFAULT'),
            text: theme('colors.blue.DEFAULT'),
          },
          focus: { outline: theme('colors.blue.DEFAULT') },
        },
        flat: {
          base: {
            background: 'transparent',
            border: 'transparent',
            text: theme('colors.blue.DEFAULT'),
            px: '0',
          },
          hover: {
            background: 'transparent',
            border: 'transparent',
            text: theme('colors.blue.dark'),
          },
          focus: { outline: theme('colors.blue.DEFAULT') },
        },
        destructive: {
          base: {
            background: theme('colors.red.DEFAULT'),
            border: theme('colors.red.DEFAULT'),
            text: '#fff',
          },
          hover: {
            background: theme('colors.red.dark'),
            border: theme('colors.red.dark'),
            text: '#fff',
          },
          focus: { outline: theme('colors.red.DEFAULT') },
        },
      }),
      linqButtonSize: {
        sm: { font: pxToRem(14), height: pxToRem(40), px: pxToRem(16) },
        md: { font: pxToRem(16), height: pxToRem(56), px: pxToRem(24) },
        lg: { font: pxToRem(18), height: pxToRem(64), px: pxToRem(32) },
      },
      linqButtonWidth: (theme) => ({ auto: 'auto', full: '100%' }),
      linqButtonShape: (theme) => ({
        rounded: theme('borderRadius.md'),
        pill: theme('borderRadius.full'),
      }),
    },
  }
);