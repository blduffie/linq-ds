const plugin = require('tailwindcss/plugin')
const { pxToRem } = require('../../util')

const button = plugin(
  function ({ addComponents, theme, variants, e }) {
    const buttonStyles = theme('edsButtonStyle');
    const buttonSizes = theme('edsButtonSize');
    const buttonWidths = theme('edsButtonWidth');
    const buttonShapes = theme('edsButtonShape');

    addComponents(
      [
        {
          '.btn': {
            alignItems: 'center',
            backgroundColor: `var(--eds-button-background, ${theme('edsButtonStyle.primary.base.background')})`,
            borderColor: `var(--eds-button-border, ${theme('edsButtonStyle.primary.base.border')})`,
            borderRadius: `var(--eds-button-border-radius, ${theme('edsButtonShape.rounded')})`,
            borderStyle: 'solid',
            borderWidth: theme('borderWidth.DEFAULT'),
            color: `var(--eds-button-text, ${theme('edsButtonStyle.primary.base.text')})`,
            cursor: 'pointer',
            display: 'inline-flex',
            fontSize: `var(--eds-button-font, ${theme('edsButtonSize.md.font')})`,
            gap: pxToRem(6),
            height: `var(--eds-button-height, ${theme('edsButtonSize.md.height')})`,
            justifyContent: 'center',
            letterSpacing: theme('letterSpacing.sm'),
            lineHeight: '1.2',
            padding: `${theme('padding.2')} var(--eds-button-padding-x, calc(var(--eds-button-height, ${theme('edsButtonSize.md.height')}) / 2 - 4px)) 0`,
            position: 'relative',
            textDecoration: 'none',
            transition: 'color 200ms ease-in-out, border 200ms ease-in-out, background 200ms ease-in-out, text-decoration-color 150ms ease-in-out',
            verticalAlign: 'middle',
            width: `var(--eds-button-width, ${theme('edsButtonWidth.auto')})`,
            '&:hover': {
              backgroundColor: `var(--eds-button-background, ${theme('edsButtonStyle.primary.hover.background')})`,
              borderColor: `var(--eds-button-border, ${theme('edsButtonStyle.primary.hover.border')})`,
              color: `var(--eds-button-text, ${theme('edsButtonStyle.primary.hover.text')})`,
            },
            '&:active': {
              transform: 'scale(.98)',
            },
            '&:focus-visible': {
              outline: `${pxToRem(4)} dotted var(--eds-button-outline, ${theme('edsButtonStyle.primary.focus.outline')})`,
              outlineOffset: pxToRem(2),
              transition: 'none',
            },
            '& span': {
              textAlign: 'left',
            },
            '&.btn-icon-only': {
              '--eds-button-width': `var(--eds-button-height, ${theme('edsButtonSize.md.height')})`,
              padding: '0',
              '& svg:not([class*="icon"])': {
                height: `var(--eds-button-icon-only, ${theme('edsButtonSize.md.icon')})`,
                marginTop: '0',
                width: `var(--eds-button-icon-only, ${theme('edsButtonSize.md.icon')})`,
              },
              '& span': {
                backgroundColor: 'rgba(0, 0, 0, .9)',
                borderRadius: pxToRem(6),
                bottom: `calc(100% + ${pxToRem(4)})`,
                color: theme('colors.white'),
                fontSize: pxToRem(14),
                opacity: '0',
                padding: `${pxToRem(8)} ${pxToRem(12)} ${pxToRem(6)}`,
                position: 'absolute',
                transition: 'all 150ms ease-out',
                transitionDelay: '200ms',
                transform: `translateY(${pxToRem(6)})`,
                visibility: 'hidden',
                whiteSpace: 'nowrap',
                '&::after': {
                  content: '""',
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderTop: '8px solid rgba(0, 0, 0, .8)',
                  height: '0',
                  left: `calc(50% - ${pxToRem(10)})`,
                  position: 'absolute',
                  top: '100%',
                  width: '0',
                },
              },
              '&:hover span, &:focus-visible span': {
                //opacity: '1',
                //transform: 'translateY(0)',
                //visibility: 'visible',
              },
            },
            '&.btn-icon-top': {
              flexDirection: 'column',
              gap: `var(--eds-button-icon-top-gap, ${pxToRem(4)})`,
              padding: `${theme('padding.0')} var(--eds-button-icon-top-padding-x, ${pxToRem(4)})`,
              '& svg:not([class*="icon"])': {
                height: `var(--eds-button-icon-top-icon, ${theme('edsButtonSize.md.icon')})`,
                marginTop: '0',
                width: `var(--eds-button-icon-top-icon, ${theme('edsButtonSize.md.icon')})`,
              },
              '& span': {
                fontSize: `var(--eds-button-icon-top-font, ${theme('edsButtonSize.md.font')})`,
                lineHeight: '1',
                whiteSpace: 'nowrap',
              },
            },
            '&:disabled:not(.btn-progress)': {
              cursor: 'not-allowed',
              opacity: theme('opacity.40'),
            },
            '&-progress:disabled': {
              cursor: 'wait',
            },
            '&-no-underline': {
              'textDecorationColor': 'transparent',
              'textDecorationLine': 'underline',
              'textDecorationStyle': 'solid',
              'textDecorationThickness': '0.08em',
              'textUnderlineOffset': pxToRem(2),
              '&:hover': {
                'textDecorationColor': 'currentColor',
              },
            },
            '&-underline': {
              'textDecorationColor': 'currentColor',
              'textDecorationLine': 'underline',
              'textDecorationStyle': 'solid',
              'textDecorationThickness': '0.08em',
              'textUnderlineOffset': pxToRem(2),
              '&:hover': {
                'textDecorationColor': 'transparent',
              },
            },
            '&:not(.btn-icon-top):not(.btn-icon-only) svg': {
              fill: 'currentColor',
              flexShrink: '0',
              //margin: `${pxToRem(-2)} calc(var(--eds-button-height, ${theme('edsButtonSize.md.height')}) / -4) 0`,
              marginTop: pxToRem(-2),
              '&:not([class*="icon"])': {
                height: 'auto',
                width: `var(--eds-button-icon-leading, ${theme('edsButtonSize.md.iconLeading')})`,
                '&:last-child': {
                  width: `var(--eds-button-icon-trailing, ${theme('edsButtonSize.md.iconTrailing')})`,
                },
              },
            },
          },
          '@media(hover: none), (pointer: coarse)': {
            '.btn': {
              overflow: 'hidden',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '5px',
                height: '5px',
                transformOrigin: '50% 50%',
                transform: 'scale(1, 1) translate(-50%)',
                borderRadius: '100%',
                background: 'rgba(255, 255, 255, .2)',
                opacity: '0',
              },
              '&:not(:active)::after': {
                animation: 'ripple 1s ease-out',
              },
            },
          },
        },
        Object.entries(buttonStyles).map(([key, { base, hover, active, focus }]) => {
          return {
            [`.${e(`btn-${key}`)}`]: {
              '--eds-button-background': `${base.background}`,
              '--eds-button-border': `${base.border}`,
              '--eds-button-text': `${base.text}`,
              ...(base.paddingX ? { '--eds-button-padding-x': `${base.paddingX}` } : {}),
              '&:hover:not([disabled])': {
                '--eds-button-background': `${hover.background}`,
                '--eds-button-border': `${hover.border}`,
                '--eds-button-text': `${hover.text}`,
              },
              '&:focus-visible:not([disabled])': {
                '--eds-button-background': `${hover.background}`,
                '--eds-button-border': `${hover.border}`,
                '--eds-button-text': `${hover.text}`,
                '--eds-button-outline': `${focus.outline}`,
              },
            },
          };
        }),
        Object.entries(buttonSizes).map(([key, size]) => {
          return {
            [`.${e(`btn-${key}`)}`]: {
              '--eds-button-font': `${size.font}`,
              '--eds-button-height': `${size.height}`,
              '--eds-button-icon-leading': `${size.iconLeading}`,
              '--eds-button-icon-trailing': `${size.iconTrailing}`,
              ...(size.iconOnly ? { '--eds-button-icon-only': `${size.iconOnly}` } : {}),
              '--eds-button-icon-top-font': `${size.iconTopFont}`,
              '--eds-button-icon-top-icon': `${size.iconTopIcon}`,
              '--eds-button-icon-top-gap': `${size.iconTopGap}`,
              '--eds-button-icon-top-padding-x': `${size.iconTopPaddingX}`,
            },
          };
        }),
        Object.entries(buttonWidths).map(([key, value]) => {
          return {
            [`.${e(`btn-${key}`)}`]: {
              '--eds-button-width': `${value}`,
            },
          };
        }),
        Object.entries(buttonShapes).map(([key, value]) => {
          return {
            [`.${e(`btn-${key}`)}`]: {
              '--eds-button-border-radius': `${value}`,
            },
          };
        }),
      ],
      variants('edsButton'),
    );
  },
  {
    theme: {
      edsButtonStyle: theme => ({
        'primary': {
          base: {
            background: theme('colors.teal.darker'),
            border: theme('colors.teal.darker'),
            text: theme('colors.white'),
          },
          hover: {
            background: theme('colors.blue.DEFAULT'),
            border: theme('colors.blue.DEFAULT'),
            text: theme('colors.white'),
          },
          active: {},
          focus: {
            outline: theme('colors.teal.darker'),
          },
        },
        'primary-reversed': {
          base: {
            background: theme('colors.white'),
            border: theme('colors.white'),
            text: theme('colors.teal.darker'),
          },
          hover: {
            background: theme('colors.teal.light'),
            border: theme('colors.teal.light'),
            text: theme('colors.teal.darker'),
          },
          active: {},
          focus: {
            outline: theme('colors.white'),
          },
        },
        'secondary': {
          base: {
            background: theme('colors.transparent'),
            border: theme('colors.teal.darker'),
            text: theme('colors.teal.darker'),
          },
          hover: {
            background: theme('colors.teal.lighter'),
            border: theme('colors.teal.darker'),
            text: theme('colors.teal.darker'),
          },
          active: {},
          focus: {
            outline: theme('colors.teal.darker'),
          },
        },
        'secondary-reversed': {
          base: {
            background: theme('colors.transparent'),
            border: theme('colors.white'),
            text: theme('colors.white'),
          },
          hover: {
            background: 'rgba(0, 0, 0, .1)',
            border: theme('colors.white'),
            text: theme('colors.white'),
          },
          active: {},
          focus: {
            outline: theme('colors.white'),
          },
        },
        'tertiary': {
          base: {
            background: theme('colors.transparent'),
            border: theme('colors.transparent'),
            text: theme('colors.teal.darker'),
          },
          hover: {
            background: theme('colors.teal.lighter'),
            border: theme('colors.transparent'),
            text: theme('colors.teal.darker'),
          },
          active: {},
          focus: {
            outline: theme('colors.teal.darker'),
          },
        },
        'tertiary-reversed': {
          base: {
            background: theme('colors.transparent'),
            border: theme('colors.transparent'),
            text: theme('colors.white'),
          },
          hover: {
            background: 'rgba(0, 0, 0, .1)',
            border: theme('colors.transparent'),
            text: theme('colors.white'),
          },
          active: {},
          focus: {
            outline: theme('colors.white'),
          },
        },
        'destructive': {
          base: {
            background: theme('colors.red.DEFAULT'),
            border: theme('colors.red.DEFAULT'),
            text: theme('colors.white'),
          },
          hover: {
            background: theme('colors.red.dark'),
            border: theme('colors.red.dark'),
            text: theme('colors.white'),
          },
          active: {},
          focus: {
            outline: theme('colors.red.DEFAULT'),
          },
        },
        'destructive-reversed': {
          base: {
            background: theme('colors.white'),
            border: theme('colors.transparent'),
            text: theme('colors.red.DEFAULT'),
          },
          hover: {
            background: 'rgb(236,209,214)',
            border: theme('colors.transparent'),
            text: theme('colors.red.DEFAULT'),
          },
          active: {},
          focus: {
            outline: theme('colors.red.DEFAULT'),
          },
        },
        'flat': {
          base: {
            background: theme('colors.transparent'),
            border: theme('colors.transparent'),
            text: theme('colors.teal.darker'),
            paddingX: '0',
          },
          hover: {
            background: theme('colors.transparent'),
            border: theme('colors.transparent'),
            text: theme('colors.teal.darker'),
          },
          active: {},
          focus: {
            outline: theme('colors.teal.darker'),
          },
        },
        'flat-reversed': {
          base: {
            background: theme('colors.transparent'),
            border: theme('colors.transparent'),
            text: theme('colors.white'),
            paddingX: '0',
          },
          hover: {
            background: theme('colors.transparent'),
            border: theme('colors.transparent'),
            text: theme('colors.white'),
          },
          active: {},
          focus: {
            outline: theme('colors.white'),
          },
        },
      }),
      edsButtonSize: {
        '2xs': {
          font: pxToRem(14),
          height: pxToRem(36),
          iconLeading: pxToRem(14),
          iconTrailing: pxToRem(10),
          iconOnly: pxToRem(18),
          iconTopFont: pxToRem(12),
          iconTopIcon: pxToRem(14),
          iconTopGap: pxToRem(4),
          iconTopPaddingX: pxToRem(6),
        },
        'xs': {
          font: pxToRem(16),
          height: pxToRem(40),
          iconLeading: pxToRem(16),
          iconTrailing: pxToRem(12),
          iconOnly: pxToRem(20),
          iconTopFont: pxToRem(12),
          iconTopIcon: pxToRem(18),
          iconTopGap: pxToRem(4),
          iconTopPaddingX: pxToRem(10),
        },
        'sm': {
          font: pxToRem(16),
          height: pxToRem(48),
          iconLeading: pxToRem(16),
          iconTrailing: pxToRem(12),
          iconOnly: pxToRem(24),
          iconTopFont: pxToRem(12),
          iconTopIcon: pxToRem(20),
          iconTopGap: pxToRem(4),
          iconTopPaddingX: pxToRem(12),
        },
        'md': {
          font: pxToRem(16),
          height: pxToRem(56),
          iconLeading: pxToRem(18),
          iconTrailing: pxToRem(14),
          iconOnly: pxToRem(28),
          iconTopFont: pxToRem(14),
          iconTopIcon: pxToRem(24),
          iconTopGap: pxToRem(6),
          iconTopPaddingX: pxToRem(14),
        },
        'lg': {
          font: pxToRem(18),
          height: pxToRem(64),
          iconLeading: pxToRem(20),
          iconTrailing: pxToRem(16),
          iconOnly: pxToRem(32),
          iconTopFont: pxToRem(16),
          iconTopIcon: pxToRem(28),
          iconTopGap: pxToRem(6),
          iconTopPaddingX: pxToRem(16),
        },
      },
      edsButtonWidth: theme => ({
        'auto': theme('width.auto'),
        'full': theme('width.full'),
      }),
      edsButtonShape: theme => ({
        'rounded': theme('borderRadius.md'),
        'pill': theme('borderRadius.full'),
      }),
    },
    variants: {
      edsButton: ['responsive'],
    },
  },
);

module.exports = button;