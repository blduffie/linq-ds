const plugin = require('tailwindcss/plugin')
const { remToVw } = require('../../util')

module.exports = plugin(function({ addComponents, theme }) {
  addComponents({
    ':where(.rich-text)': {
      '--eds-rte-font-min': theme('fontSize.mdMin'),
      '--eds-rte-font-avg': remToVw(theme('fontSize.mdMax')),
      '--eds-rte-font-max': theme('fontSize.mdMax'),
      '--eds-rte-letter-spacing': theme('letterSpacing.md'),
      '--eds-rte-line-height': theme('lineHeight.md'),
      '--eds-rte-link-color': theme('colors.teal.darker'),
      //color: theme('colors.gray.dark'),

      // Font smoothing on elements

      '& :is(h1, h2, h3, h4, h5, dt, pre, code, b, strong)': {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      },

      // Font sizes on elements

      '& :is(h1, h2, h3, h4, h5, dt, pre)': {
        fontSize: `clamp(var(--eds-rte-font-min), var(--eds-rte-font-avg), var(--eds-rte-font-max))`,
        letterSpacing: `var(--eds-rte-letter-spacing)`,
        lineHeight: `var(--eds-rte-line-height)`,
      },

      // Link elements

      '& a': {
        color: `var(--eds-rte-link-color)`,
        textDecorationColor: `var(--eds-rte-link-color)`,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationThickness: '0.08em',
        textUnderlineOffset: '0.125rem',
        transition: 'text-decoration-color 100ms ease-in-out',
        '&:hover': {
          textDecorationColor: theme('colors.transparent'),
        },
      },
      '&.rich-text-current a': {
        '--eds-rte-link-color': theme('colors.current'),
      },

      // Emphasis elements

      '& strong, & b': {
        fontWeight: '700',
      },
      '& em, & i': {
        fontStyle: 'italic',
      },

      // Paragraph element

      '& p': {
        marginBottom: theme('spacing.16'),
        marginTop: theme('spacing.16'),
      },

      // Address elements

      '& address': {
        fontStyle: 'normal',
        marginBottom: theme('spacing.16'),
        marginTop: theme('spacing.16'),
      },

      // Definition list elements

      '& dl': {
        marginBottom: theme('spacing.16'),
        marginTop: theme('spacing.16'),
      },
      '& dt': {
        '--eds-rte-font-min': theme('fontSize.lgMin'),
        '--eds-rte-font-avg': remToVw(theme('fontSize.lgMax')),
        '--eds-rte-font-max': theme('fontSize.lgMax'),
        '--eds-rte-letter-spacing': theme('letterSpacing.md'),
        '--eds-rte-line-height': theme('lineHeight.md'),
        marginTop: theme('spacing.16'),
      },
      '& dd': {
        marginBottom: theme('spacing.16'),
        marginLeft: theme('spacing.24'),
      },

      // Unordered/ordered list elements

      '& ul': {
        listStyleType: theme('listStyleType.disc'),
        marginBottom: theme('spacing.16'),
        marginTop: theme('spacing.16'),
        paddingLeft: theme('spacing.40'),
      },
      '& ol': {
        listStyleType: theme('listStyleType.decimal'),
        marginBottom: theme('spacing.16'),
        marginTop: theme('spacing.16'),
        paddingLeft: theme('spacing.40'),
      },
      '& ul > li > ul': {
        listStyleType: theme('listStyleType.circle'),
        marginBottom: theme('spacing.0'),
        marginTop: theme('spacing.0'),
      },
      '& ol > li > ol': {
        listStyleType: theme('listStyleType.alpha'),
        marginBottom: theme('spacing.0'),
        marginTop: theme('spacing.0'),
      },
      '& ul li::marker, & ol li::marker': {
        color: theme('colors.teal.darker'),
        fontWeight: '700',
      },
      '& ul li::marker': {
        fontSize: 'calc(1em + .125rem)',
      },
      '& li': {
        marginBottom: theme('spacing.8'),
        marginTop: theme('spacing.8'),
      },
      '& li li': {
        marginBottom: theme('spacing.6'),
        marginTop: theme('spacing.6'),
      },
      '& > ul > li p': {
        marginTop: theme('spacing.12'),
        marginBottom: theme('spacing.12'),
      },
      /*'& > ul > li > *:first-child': {
        marginTop: theme('spacing.8'),
      },
      '& > ul > li > *:last-child': {
        marginBottom: theme('spacing.8'),
      },
      '& > ol > li > *:first-child': {
        marginTop: theme('spacing.8'),
      },
      '& > ol > li > *:last-child': {
        marginBottom: theme('spacing.8'),
      },*/
      '& li > ul, li > ol': {
        marginBottom: theme('spacing.0'),
        marginTop: theme('spacing.0'),
        paddingLeft: theme('spacing.32'),
      },

      // Horizontal rule element

      '& hr': {
        borderColor: theme('borderColor.gray.light'),
        borderTopWidth: 1,
        marginTop: theme('spacing.32'),
        marginBottom: theme('spacing.32'),
        '@screen md': {
          marginTop: theme('spacing.48'),
          marginBottom: theme('spacing.48'),
        },
      },
      '& hr + *': {
        marginTop: '0',
      },

      // Blockquote elements

      '& blockquote': {
        color: theme('colors.blue.default'),
        fontStyle: 'italic',
        margin: theme('spacing.24'),
        quotes: '"\\201C""\\201D""\\2018""\\2019"',
      },
      '& blockquote p:first-of-type::before': {
        content: 'open-quote',
      },
      '& blockquote p:last-of-type::after': {
        content: 'close-quote',
      },

      // Header elements

      '& h1': {
        '--eds-rte-font-min': theme('fontSize.3xlMin'),
        '--eds-rte-font-avg': remToVw(theme('fontSize.3xlMax')),
        '--eds-rte-font-max': theme('fontSize.3xlMax'),
        '--eds-rte-letter-spacing': theme('letterSpacing.lg'),
        '--eds-rte-line-height': theme('lineHeight.sm'),
        color: theme('colors.blue.DEFAULT'),
        fontWeight: 'normal',
        marginBottom: theme('spacing.12'),
        marginTop: theme('spacing.0'),
      },
      '& h2': {
        '--eds-rte-font-min': theme('fontSize.2xlMin'),
        '--eds-rte-font-avg': remToVw(theme('fontSize.2xlMax')),
        '--eds-rte-font-max': theme('fontSize.2xlMax'),
        '--eds-rte-letter-spacing': theme('letterSpacing.lg'),
        '--eds-rte-line-height': theme('lineHeight.sm'),
        color: theme('colors.gray.darker'),
        fontWeight: 'normal',
        marginBottom: theme('spacing.8'),
        marginTop: theme('spacing.32'),
        '@screen md': {
          marginBottom: theme('spacing.12'),
          marginTop: theme('spacing.48'),
        },
      },
      '& h3': {
        '--eds-rte-font-min': theme('fontSize.xlMin'),
        '--eds-rte-font-avg': remToVw(theme('fontSize.xlMax')),
        '--eds-rte-font-max': theme('fontSize.xlMax'),
        '--eds-rte-letter-spacing': theme('letterSpacing.lg'),
        '--eds-rte-line-height': theme('lineHeight.sm'),
        color: theme('colors.blue.default'),
        fontWeight: 'normal',
        marginBottom: theme('spacing.8'),
        marginTop: theme('spacing.32'),
        '@screen md': {
          marginBottom: theme('spacing.12'),
        },
      },
      '& h4': {
        '--eds-rte-font-min': theme('fontSize.lgMin'),
        '--eds-rte-font-avg': remToVw(theme('fontSize.lgMax')),
        '--eds-rte-font-max': theme('fontSize.lgMax'),
        '--eds-rte-letter-spacing': theme('letterSpacing.md'),
        '--eds-rte-line-height': theme('lineHeight.md'),
        color: theme('colors.blue.default'),
        fontWeight: 'normal',
        marginBottom: theme('spacing.8'),
        marginTop: theme('spacing.32'),
        '@screen md': {
          marginBottom: theme('spacing.12'),
        },
      },
      '& h5': {
        '--eds-rte-font-min': theme('fontSize.lgMin'),
        '--eds-rte-font-avg': remToVw(theme('fontSize.lgMax')),
        '--eds-rte-font-max': theme('fontSize.lgMax'),
        '--eds-rte-letter-spacing': theme('letterSpacing.md'),
        '--eds-rte-line-height': theme('lineHeight.md'),
        color: theme('colors.gray.darker'),
        fontWeight: 'normal',
        marginBottom: theme('spacing.8'),
        marginTop: theme('spacing.32'),
        '@screen md': {
          marginBottom: theme('spacing.12'),
        },
      },
      '& h6': {
        color: theme('colors.gray.darker'),
        fontWeight: 'normal',
        marginBottom: theme('spacing.8'),
        marginTop: theme('spacing.32'),
        '@screen md': {
          marginBottom: theme('spacing.12'),
        },
      },
      '& h2 + *': {
        marginTop: '0',
      },
      '& h3 + *': {
        marginTop: '0',
      },
      '& h4 + *': {
        marginTop: '0',
      },
      '& h5 + *': {
        marginTop: '0',
      },
      '& h6 + *': {
        marginTop: '0',
      },

      // Media elements

      '& img': {
        marginBottom: theme('spacing.0'),
        marginTop: theme('spacing.0'),
      },
      '& video': {
        marginBottom: theme('spacing.32'),
        marginTop: theme('spacing.32'),
      },
      '& figure': {
        marginBottom: theme('spacing.32'),
        marginTop: theme('spacing.32'),
      },
      '& figure > *': {
        marginBottom: '0',
        marginTop: '0',
      },
      '& figure figcaption': {
        marginTop: theme('spacing.8'),
      },

      // Pre and code elements

      '& code': {
        backgroundColor: theme('colors.gray.lighter'),
        color: theme('colors.gray.darker'),
        fontFamily: 'monospace',
        fontSize: '90%',
        fontWeight: 'bold',
        paddingLeft: theme('spacing.4'),
        paddingRight: theme('spacing.4'),
      },
      '& code::before': {
        content: '"`"',
      },
      '& code::after': {
        content: '"`"',
      },
      '& pre': {
        '--eds-rte-font-min': theme('fontSize.smMin'),
        '--eds-rte-font-avg': remToVw(theme('fontSize.smMax')),
        '--eds-rte-font-max': theme('fontSize.smMax'),
        '--eds-rte-letter-spacing': theme('letterSpacing.sm'),
        '--eds-rte-line-height': theme('lineHeight.md'),
        backgroundColor: theme('colors.gray.darker'),
        borderRadius: theme('borderRadius.md'),
        color: theme('colors.gray.light'),
        fontFamily: 'monospace',
        overflowX: 'auto',
        padding: `${theme('spacing.16')} ${theme('spacing.24')}`,
      },
      '& pre code': {
        backgroundColor: 'transparent',
        borderWidth: '0',
        borderRadius: '0',
        padding: '0',
        fontWeight: '400',
        color: 'inherit',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        lineHeight: 'inherit',
      },
      '& pre code::before': {
        content: '""',
      },
      '& pre code::after': {
        content: '""',
      },

      // Table elements

      '& table': {
        marginBottom: theme('spacing.32'),
        marginTop: theme('spacing.32'),
        tableLayout: 'auto',
        textAlign: 'left',
        width: '100%',
      },
      '& th': {
        color: theme('colors.blue.DEFAULT'),
        fontWeight: '700',
        padding: `${theme('spacing.12')} ${theme('spacing.16')}`,
        verticalAlign: 'bottom',
      },
      '& tr': {
        borderBottomColor: theme('borderColor.gray.light'),
        borderBottomWidth: '1px',
        borderTopColor: theme('borderColor.gray.light'),
        borderTopWidth: '1px',
      },
      '& td': {
        padding: `${theme('spacing.12')} ${theme('spacing.16')}`,
        verticalAlign: 'top',
      },
      '& > :first-child': {
        marginTop: '0',
      },
      '& > :last-child': {
        marginBottom: '0',
      },
    },
  });
});