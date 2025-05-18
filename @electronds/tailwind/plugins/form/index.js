const plugin = require('tailwindcss/plugin');
const { pxToRem, hexToRgb } = require('../../util');

const form = plugin(
  function({ addComponents, addVariant, theme, variants, e }) {
    const formInputStyles = theme('edsFormInputStyle');
    const formSizes = theme('edsFormSize');
    const formStatuses = theme('edsFormStatus');
    const formTextareaStyles = theme('edsFormTextareaStyle');
    const formTextareaSizes = theme('edsFormTextareaSize');
    const formTextareaStatuses = theme('edsFormTextareaStatus');

    addVariant('track', ['&::-webkit-slider-runnable-track'])
    addVariant('thumb', ['&::-webkit-slider-thumb', '&::-moz-range-thumb', '&::-ms-thumb'])

    addComponents(
      [
        {
          '.form': {

            position: 'relative',

            '&-input-wrapper, &-textarea-wrapper': {
              position: 'relative',
              '--eds-form-border-color': `rgba(${hexToRgb(theme('borderColor.input'))}, 1)`,
              '--eds-form-border-color-hover': theme('colors.gray.dark'),
              '--eds-form-border-color-focus': theme('colors.teal.darker'),
              '--eds-form-box-shadow': 'none',
              '--eds-form-box-shadow-hover': `0 0 0 1px rgba(${hexToRgb(theme('colors.gray.darker'))}, .25)`,
              '--eds-form-box-shadow-focus': `0 0 0 2px rgba(${hexToRgb(theme('colors.teal.darker'))}, 1)`,
              '--eds-form-spacing-x': theme('spacing.12'),
              '--eds-form-spacing-x-icon': theme('spacing.36'),
              '--eds-form-spacing-left': `var(--eds-form-spacing-x)`,
              '--eds-form-spacing-right': `var(--eds-form-spacing-x)`,
              '--eds-form-status-color': theme('colors.gray.dark'),
              '--eds-form-caret-color': 'var(---eds-form-status-color)',
              '--eds-form-group-opacity': theme('opacity.100'),
              '--eds-form-input-label-top': theme('spacing.6'),
              '--eds-form-input-height': pxToRem(58),
              '--eds-form-input-font-size': pxToRem(16),
              '--eds-form-textarea-height': pxToRem(128),
              '--eds-form-textarea-font-size': pxToRem(16),
              /*
                '&:hover': {
                  '--eds-form-border-color': theme('colors.gray.dark'),
                  '--eds-form-box-shadow': `0 0 0 1px rgba(${hexToRgb(theme('colors.gray.darker'))}, .25)`,
                },
                '&:focus, &:focus-within': {
                  '--eds-form-border-color': theme('colors.teal.darker'),
                  '--eds-form-box-shadow': `0 0 0 3px rgba(${hexToRgb(theme('colors.teal.darker'))}, .5)`,
                },
              */
            },

            '&-select-wrapper': {

            },

            '&-checkbox-wrapper': {

            },

            '&-toggle-wrapper': {

            },

            '&-icon-leading': {
              '--eds-form-spacing-left': `var(--eds-form-spacing-x-icon)`,
            },

            '&-icon-trailing': {
              '--eds-form-spacing-right': `var(--eds-form-spacing-x-icon)`,
            },

            '&-status-error': {
              '--eds-form-border-color': `rgba(var(--eds-form-status-color), .6)`,
              '--eds-form-border-color-hover': 'rgb(var(--eds-form-status-color))',
              '--eds-form-border-color-focus': 'rgb(var(--eds-form-status-color))',
              '--eds-form-box-shadow-hover': `0 0 0 1px rgba(var(--eds-form-status-color), .25)`,
              '--eds-form-box-shadow-focus': `0 0 0 2px rgba(var(--eds-form-status-color), 1)`,
              '--eds-form-caret-color': 'rgb(var(--eds-form-status-color))',
            },

            '&-state-disabled': {
              '--eds-form-group-opacity': theme('opacity.40'),
            },

            /* Input/Textarea Group */

            '&-input-group, &-textarea-group': {
              backgroundColor: theme('colors.white'),
              borderRadius: theme('borderRadius.md'),
              border: `1px solid var(--eds-form-border-color)`,
              boxShadow: 'var(--eds-form-box-shadow)',
              display: 'flex',
              opacity: 'var(--eds-form-group-opacity)',
              overflow: 'hidden',
              position: 'relative',
              transition: 'border-color ease-in-out 250ms, box-shadow ease-in-out 250ms',

              '&:hover': {
                '--eds-form-border-color': 'var(--eds-form-border-color-hover)',
                '--eds-form-box-shadow': 'var(--eds-form-box-shadow-hover)',
              },

              '&:focus-within': {
                '--eds-form-border-color': 'var(--eds-form-border-color-focus)',
                '--eds-form-box-shadow': 'var(--eds-form-box-shadow-focus)',
              },

              '&-prepend': {
                alignItems: 'center',
                display: 'flex',
                order: '1',
              },

              '&-content': {
                alignItems: 'center',
                display: 'flex',
                flexGrow: '1',
                order: '2',
                position: 'relative',
              },

              '&-append': {
                alignItems: 'center',
                display: 'flex',
                order: '3',
              },

              '&.form-is-disabled': {
                opacity: theme('opacity.5'),
              }

              /*':where(&)': {
                backgroundColor: `var(--eds-form-background-color, theme('colors.white'))`,
              },*/

            },

            /* Input/textarea Field */

            '&-input-field, &-textarea-field': {
              backgroundColor: 'transparent',
              borderRadius: theme('borderRadius.md'),
              caretColor: 'var(--eds-form-caret-color)',
              color: theme('color.gray.dark'),
              position: 'relative',
              width: '100%',

              '&:focus': {
                outline: 'none',
              },

              '&::placeholder': {
                color: 'transparent',
              },
            },

            '&-input-field': {
              fontSize: `var(--eds-form-input-font-size)`,
              height: `calc(var(--eds-form-input-height) - 2px)`,
              paddingBottom: theme('padding.4'),
              paddingLeft: `var(--eds-form-spacing-left, theme('padding.16'))`,
              paddingRight: `var(--eds-form-spacing-right, theme('padding.16'))`,
              paddingTop: theme('padding.24'),
            },

            '&-textarea-field': {
              fontSize: `var(--eds-form-textarea-font-size)`,
              maxHeight: pxToRem(384),
              minHeight: `var(--eds-form-textarea-height)`,
              paddingBottom: theme('padding.12'),
              paddingLeft: `var(--eds-form-spacing-left, theme('padding.16'))`,
              paddingRight: `var(--eds-form-spacing-right, theme('padding.16'))`,
              paddingTop: theme('padding.24'),
              resize: 'vertical',
            },

            /* Label - Base */

            '&-input-label, &-textarea-label': {
              color: theme('colors.gray.dark'),
              fontSize: pxToRem(12),
              left: `var(--eds-form-spacing-left)`,
              overflow: 'hidden',
              position: 'absolute',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              transition: 'all ease-in-out 250ms',
            },

            '&-textarea-label': {
              backgroundColor: theme('colors.white'),
              right: `var(--eds-form-spacing-right)`,
            },

            /* Label - When field is empty */

            '&-input-field:placeholder-shown:not(:focus) ~ &-input-label, &-textarea-field:placeholder-shown:not(:focus) ~ &-textarea-label': {
              color: 'currentColor',
              left: `var(--eds-form-spacing-left)`,
              right: `var(--eds-form-spacing-right)`,
            },

            '&-input-field:placeholder-shown:not(:focus) ~ &-input-label': {
              fontSize: `var(--eds-form-input-font-size)`,
              top: 'calc(50% + .125rem)',
              transform: 'translateY(-50%)',
            },

            '&-textarea-field:placeholder-shown:not(:focus) ~ &-textarea-label': {
              paddingTop: theme('spacing.12'),
              fontSize: `var(--eds-form-textarea-font-size)`,
            },

            /* Label - When field is focus */

            '&-input-field:focus ~ &-input-label, &-textarea-field:focus ~ &-textarea-label': {
              color: theme('colors.teal.darker'),
              left: `var(--eds-form-spacing-left)`,
            },

            '&-input-field:focus ~ &-input-label': {
              top: `var(--eds-form-input-label-top)`,
              transform: 'translateY(0px)',
            },

            '&-textarea-field:focus ~ &-textarea-label': {
              paddingTop: theme('spacing.6'),
            },

            /* Label - When field contains text */

            '&-input-field:not(:placeholder-shown) ~ &-input-label, &-textarea-field:not(:placeholder-shown) ~ &-textarea-label': {
              left: `var(--eds-form-spacing-left)`,
            },

            '&-input-field:not(:placeholder-shown) ~ &-input-label': {
              top: `var(--eds-form-input-label-top)`,
              transform: 'translateY(0px)',
            },

            '&-textarea-field:not(:placeholder-shown) ~ &-textarea-label': {
              paddingTop: theme('spacing.6'),
            },

            /* Label - When field contains text and is focus */

            '&-input-field:not(:placeholder-shown):not(:focus) ~ &-input-label, &-textarea-field:not(:placeholder-shown):not(:focus) ~ &-textarea-label': {
              // fontWeight: 'bold',
            },

            /* Leading icon */

            '&-input-leading-icon, &-input-trailing-icon': {
              alignItems: 'center',
              bottom: '0',
              display: 'flex',
              pointerEvents: 'none',
              position: 'absolute',
              top: '0',
              transition: 'all ease-in-out 250ms'
            },

            '&-input-leading-icon': {
              left: `var(--eds-form-spacing-x)`,
              '& svg': {
                color: 'currentColor',
                height: theme('spacing.18'),
                width: theme('spacing.18'),
              },
            },

            /* Trailing icon */

            '&-input-trailing-icon': {
              color: `rgb(var(--eds-form-status-color))`,
              right: `var(--eds-form-spacing-x)`,
              '& svg': {
                color: 'currentColor',
                height: theme('spacing.18'),
                width: theme('spacing.18'),
              },
            },

            '&-textarea-trailing-icon': {
              color: `rgb(var(--eds-form-status-color))`,
              position: 'absolute',
              right: `var(--eds-form-spacing-x)`,
              top: theme('spacing.8'),
              '& svg': {
                color: 'currentColor',
                height: theme('spacing.16'),
                width: theme('spacing.16'),
              },
            },

            /* Supportive text: Helper, Error, Count */

            '&-input-support, &-textarea-support': {
              color: theme('colors.gray.dark'),
              display: 'flex',
              fontSize: pxToRem(12),
              gap: theme('spacing.24'),
              justifyContent: 'space-between',
              marginTop: theme('spacing.4'),
            },

            '&-input-count, &-textarea-count': {
              whiteSpace: 'no-wrap',
            },

          },

        },
        {
          '.form-check, .form-radio, .form-checkbox': {

            '&-wrapper': {
              '--eds-form-radio-input-size': pxToRem(20),
              '--eds-form-radio-label-size': pxToRem(16),
              '--eds-form-radio-description-size': `calc(var(--eds-form-radio-label-size) - ${pxToRem(2)})`,
              display: 'flex',
              gap: pxToRem(8),
              position: 'relative',
              //'&:has(:focus-visible)': {
              //  borderRadius: pxToRem(2),
              //  outline: `${pxToRem(3)} dotted ${theme('colors.teal.darker')}`,
              //  outlineOffset: pxToRem(2),
              //},
              '& .form-radio, & .form-checkbox': {
                marginTop: `var(--eds-form-radio-input-margin-top, ${pxToRem(2)})`,
              },
            },

            '&-field': {
              flexShrink: '0',
              paddingTop: pxToRem(2),
            },

            '&': {
              appearance: 'none',
              backgroundColor: theme('colors.white'),
              //border: `1px solid ${theme('colors.gray.DEFAULT')}`,
              content: '""',
              display: 'block',
              flexShrink: '0',
              height: `var(--eds-form-radio-input-size)`,
              justifySelf: 'center',
              left: '0',
              outline: 'none',
              position: 'relative',
              top: '0',
              transition: 'all 200ms ease-in',
              width: `var(--eds-form-radio-input-size)`,
              '&[aria-disabled="true"], &[aria-disabled="true"] + &-text': {
                opacity: '.6',
              },
              '&:focus-visible': {
                outline: 'none',
              },
              '&::after': {
                borderRadius: '9999px',
              },
              '&:checked': {
                '&::after': {
                  animation: 'click .65s ease-out',
                  backgroundColor: theme('colors.teal.darker'),
                  content: '""',
                  display: 'block',
                  inset: '0',
                  opacity: '0',
                  position: 'absolute',
                },
              },
              '& + &-text': {
                width: '100%',
              },
            },

            '&-text': {
              flexGrow: '1',
              order: '1',
            },

            '&-label': {
              display: 'block',
              fontSize: `var(--eds-form-radio-label-size)`,
              '&:after': {
                content: '""',
                cursor: 'pointer',
                inset: '0',
                position: 'absolute',
              },
              'a': {
                position: 'relative',
                zIndex: '1',
              },
            },

            '&-description': {
              //fontSize: `var(--eds-form-radio-description-size)`,
              fontSize: pxToRem(14),
            },

            '&-expandable': {
              overflowHidden: 'hidden',
              maxHeight: '0',
              transition: 'max-height '
            },

          },
          '.form-radio[type="radio"]': {
            backgroundColor: theme('colors.white'),
            borderRadius: pxToRem(999),
            border: `${pxToRem(1)} solid ${theme('borderColor.input')}`,
            boxShadow: `inset 0 0 0 calc(var(--eds-form-radio-input-size, ${pxToRem(24)}) / 6) ${theme('colors.white')}, 0 0 0 ${pxToRem(2)} rgba(${hexToRgb(theme('colors.teal.darker'))}, 0)`,
            outlineColor: 'transparent',
            outlineOffset: '0',
            outlineStyle: 'solid',
            outlineWidth: pxToRem(2),
            transition: 'all 200ms ease-out,',
            '&:not([aria-disabled="true"]):hover': {
              boxShadow: `inset 0 0 0 calc(var(--eds-form-radio-input-size, ${pxToRem(24)}) / 6) ${theme('colors.white')}, 0 0 0 ${pxToRem(8)} rgba(${hexToRgb(theme('colors.teal.darker'))}, .1)`,
            },
            '&:not([aria-disabled="true"]):focus-visible': {
              borderColor: theme('colors.teal.darker'),
              outlineColor: theme('colors.teal.darker'),
            },
            '&:checked': {
              backgroundColor: theme('colors.teal.darker'),
              borderColor: theme('colors.teal.darker'),
              zIndex: '0',
            },
          },
          '.form-checkbox[type="checkbox"]': {
            backgroundColor: theme('colors.white'),
            borderRadius: pxToRem(4),
            border: `${pxToRem(1)} solid ${theme('borderColor.input')}`,
            boxShadow: `0 0 0 ${pxToRem(2)} rgba(${hexToRgb(theme('colors.teal.darker'))}, 0)`,
            outlineColor: 'transparent',
            outlineOffset: '0',
            outlineStyle: 'solid',
            outlineWidth: pxToRem(2),
            transition: 'all 200ms ease-out,',
            '&:not([aria-disabled="true"]):hover': {
              boxShadow: `0 0 0 ${pxToRem(8)} rgba(${hexToRgb(theme('colors.teal.darker'))}, .1)`,
            },
            '&:not([aria-disabled="true"]):focus-visible': {
              borderColor: theme('colors.teal.darker'),
              outlineColor: theme('colors.teal.darker'),
            },
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              pointerEvents: 'none',
              transition: 'all 300ms ease-out',
            },
            '&::before': {
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M19.79,4.746c-.306-.363-.843-.425-1.223-.141-.181,.135-4.373,3.305-9.67,10.517l-3.457-2.617c-.395-.299-.958-.221-1.257,.174-.253,.334-.241,.799,.029,1.12l4.606,5.457c.32,.379,.885,.426,1.264,.107,.117-.099,.207-.225,.261-.369,.025-.065,2.505-6.503,9.378-13.018,.345-.327,.376-.865,.07-1.229\' fill=\'%23fff\'/%3E%3C/svg%3E")',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
              bottom: '0',
              left: '0',
              top: '0',
              width: '0',
            },
            '&:indeterminate': {
              backgroundColor: theme('colors.teal.darker'),
              borderColor: theme('colors.teal.darker'),
              outlineOffset: pxToRem(2),
              outlineWidth: pxToRem(3),
              '&::after': {
                backgroundColor: theme('colors.white'),
                borderRadius: pxToRem(2),
                content: '""',
                height: pxToRem(3),
                left: pxToRem(3),
                right: pxToRem(3),
                top: `calc(50% - ${pxToRem(1.5)})`,
              },
            },
            '&:checked': {
              backgroundColor: theme('colors.teal.darker'),
              borderColor: theme('colors.teal.darker'),
              outlineOffset: pxToRem(2),
              outlineWidth: pxToRem(3),
              '&::before': {
                width: '100%',
              },
            },
          },
        },
        {
          '.form-choice': {

            '&-wrapper': {
              position: 'relative',
            },

            '&-card': {

            },

            '&-stack': {

            },

            '&-container': {
              alignItems: 'center',
              display: 'flex',
              minHeight: `var(--eds-form-input-height, ${pxToRem(56)})`,
              padding: `${pxToRem(6)} ${pxToRem(12)}`,
              position: 'relative',
              transition: 'all ease-in-out 250ms',
              '.form-choice-card &': {
                alignItems: 'center',
                background: theme('colors.white'),
                border: `1px solid ${theme('colors.gray.DEFAULT')}`,
                borderRadius: pxToRem(6),
                display: 'grid',
                '&:hover': {
                  borderColor: theme('colors.gray.dark'),
                },
              },
            },

            '&-field': {
              appearance: 'none',
              height: '100%',
              opacity: '0',
              position: 'absolute',
              width: '100%',
              /*
              content: '""',
              display: 'block',
              flexShrink: '0',
              width: pxToRem(18),
              height: pxToRem(18),
              marginTop: pxToRem(2),
              position: 'relative',
              top: '0',
              left: '0',
              justifySelf: 'center',
              background: theme('colors.white'),
              transition: 'all 300ms ease-in-out',*/
              '&:focus-visible + .form-choice-container': {
                borderColor: theme('colors.teal.darker'),
                boxShadow: `0 0 0 ${pxToRem(6)} rgba(${hexToRgb(theme('colors.teal.darker'))}, .4)`,
              },
              '&:checked + .form-choice-container': {
                borderColor: theme('colors.teal.darker'),
                boxShadow: `inset 0 0 0 2px ${theme('colors.teal.darker')}`,
              },
              '&:checked:focus-visible + .form-choice-container': {
                borderColor: theme('colors.teal.darker'),
                boxShadow: `inset 0 0 0 2px ${theme('colors.teal.darker')}, 0 0 0 ${pxToRem(4)} rgba(${hexToRgb(theme('colors.teal.darker'))}, .4)`,
              },
              '& + .form-choice-container .form-choice-visual': {
                backgroundColor: theme('colors.white'),
                boxShadow: `inset 0 0 0 1px rgba(${hexToRgb(theme('colors.gray.dark'))}, .4), 0 0 0 0 rgba(${hexToRgb(theme('colors.teal.darker'))}, .1)`,
                flexShrink: '0',
                height: pxToRem(20),
                marginTop: pxToRem(2),
                position: 'relative',
                transition: 'background 150ms ease-out, box-shadow 200ms ease-out',
                width: pxToRem(20),
                '&::before, &::after': {
                  content: '""',
                  position: 'absolute',
                  pointerEvents: 'none',
                  transition: 'all 300ms ease-out',
                },
                '&::before': {
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M19.79,4.746c-.306-.363-.843-.425-1.223-.141-.181,.135-4.373,3.305-9.67,10.517l-3.457-2.617c-.395-.299-.958-.221-1.257,.174-.253,.334-.241,.799,.029,1.12l4.606,5.457c.32,.379,.885,.426,1.264,.107,.117-.099,.207-.225,.261-.369,.025-.065,2.505-6.503,9.378-13.018,.345-.327,.376-.865,.07-1.229\' fill=\'%23fff\'/%3E%3C/svg%3E")',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundPosition: 'left center',
                  backgroundRepeat: 'no-repeat',
                  bottom: '0',
                  left: '0',
                  top: '0',
                  right: '100%',
                },
              },
              '&:checked + .form-choice-container .form-choice-visual': {
                backgroundColor: theme('colors.teal.darker'),
                borderColor: theme('colors.teal.darker'),
                '&::before': {
                  right: '0',
                },
              },
              '&[type="radio"] + .form-choice-container .form-choice-visual': {
                borderRadius: '100%',
              },
              '&[type="checkbox"] + .form-choice-container .form-choice-visual': {
                borderRadius: pxToRem(4),
              },
            },

            '&-content': {
              display: 'flex',
              flexGrow: '1',
              /*'&::after': {
                content: '""',
                cursor: 'pointer',
                inset: '0',
                position: 'absolute',
              },*/
              //position: 'relative',
              '&:has(:focus-visible)': {
                borderRadius: pxToRem(2),
                outline: `${pxToRem(3)} dotted ${theme('colors.teal.darker')}`,
                outlineOffset: pxToRem(2),
              },
            },

            '&-icon': {
              flexShrink: '0',
              marginRight: pxToRem(8),
              marginTop: pxToRem(2),
            },

            '&-text': {
              flexGrow: '1',
            },

            '&-nested': {

              maxHeight: '0',
              overflow: 'hidden',
              transition: 'max-height 250ms ease-in',

              '.form-choice-field:checked &': {
                borderColor: theme('colors.teal.darker'),
                boxShadow: `inset 0 0 0 2px ${theme('colors.teal.darker')}`,
              },

              '&-content': {
                borderTop: `1px solid ${theme('colors.gray.light')}`,
                backgroundColor: theme('colors.gray.lighter'),
                borderBottomLeftRadius: theme('borderRadius.md'),
                borderBottomRightRadius: theme('borderRadius.md'),
                padding: theme('spacing.12'),
              }

            },

            /* Radio */

            '&-field[type="radio"]': {
              borderRadius: '100%',
              boxShadow: `inset 0 0 0 1px rgba(${hexToRgb(theme('colors.gray.dark'))}, .4), inset 0 0 0 0.5rem ${theme('colors.white')}, 0 0 0 0rem rgba(${hexToRgb(theme('colors.teal.darker'))}, .4)`,
              outline: 'none',
              '&:hover, &:focus-visible': {
                background: 'none',
                boxShadow: `inset 0 0 0 1px ${theme('colors.teal.darker')}, inset 0 0 0 0.5rem ${theme('colors.white')}, 0 0 0 ${pxToRem(4)} rgba(${hexToRgb(theme('colors.teal.darker'))}, .4)`,
              },
              '&:checked': {
                backgroundColor: theme('colors.teal.darker'),
                boxShadow: `inset 0 0 0 1px ${theme('colors.teal.darker')}, inset 0 0 0 ${pxToRem(4)} ${theme('colors.white')}, 0 0 0 0rem rgba(${hexToRgb(theme('colors.teal.darker'))}, .4)`,
                zIndex: '0',
                '&:hover': {
                  //boxShadow: `inset 0 0 0 1px ${theme('colors.teal.darker')}, inset 0 0 0 ${pxToRem(4)} ${theme('colors.white')}, 0 0 0 ${pxToRem(1)} rgba(${hexToRgb(theme('colors.gray.darker'))}, .4)`,
                },
                '&::after': {
                  animation: 'click .65s ease-out',
                  background: theme('colors.teal.darker'),
                  content: '""',
                  display: 'block',
                  inset: '0',
                  opacity: '0',
                  position: 'absolute',
                },
              },
              '&::after': {
                borderRadius: '50%',
              },
              '& + &-text': {
                flexBasis: '100%',
              },
            },

            '&-label': {
              display: 'block',
              fontSize: pxToRem(16),
              '&:after': {
                content: '""',
                inset: '0',
                position: 'absolute',
              },
            },

            '&-description': {
              fontSize: pxToRem(14),
            },



          },
        },
        {
          '.form-input-field[type="number"]': {

            '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
              '-webkit-appearance': 'none',
              margin: '0',
            },

          },
          '.form-input-field[type="password"]': {

            '&::-ms-reveal': {
              display: 'none',
            },

          },
        },
        Object.entries(formSizes).map(([key, { input, textarea, radio }]) => {
          return {
            [`.${e(`form-size-${key}`)}`]: {
              '--eds-form-input-height': `${input.height}`,
              '--eds-form-input-font-size': `${input.fontsize}`,
              '--eds-form-textarea-height': `${textarea.height}`,
              '--eds-form-textarea-font-size': `${textarea.fontsize}`,
              '--eds-form-input-label-top': `${input.label}`,
              '--eds-form-radio-input-size': `${radio.inputsize}`,
              '--eds-form-radio-input-margin-top': `${radio.inputMarginTop}`,
              '--eds-form-radio-label-size': `${radio.fontsize}`,
            },
          };
        }),
        Object.entries(formStatuses).map(([key, value]) => {
          return {
            [`.${e(`form-status-${key}`)}`]: {
              '--eds-form-status-color': `${hexToRgb(value)}`,
              '--eds-form-spacing-right': `var(--eds-form-spacing-x-icon)`,
            },
          };
        }),
      ],
      variants('edsForm'),
    );
  },
  {
    theme: {
      edsFormSize: theme => ({
        sm: {
          input: {
            height: pxToRem(48),
            fontsize: pxToRem(16),
            label: theme('spacing.4'),
          },
          textarea: {
            height: pxToRem(80),
            fontsize: pxToRem(16),
          },
          radio: {
            inputsize: pxToRem(18),
            inputMarginTop: pxToRem(2),
            fontsize: pxToRem(16),
          },
        },
        md: {
          input: {
            height: pxToRem(56),
            fontsize: pxToRem(16),
            label: theme('spacing.6'),
          },
          textarea: {
            height: pxToRem(128),
            fontsize: pxToRem(16),
          },
          radio: {
            inputsize: pxToRem(24),
            inputMarginTop: pxToRem(-1),
            fontsize: pxToRem(16),
          },
        },
        lg: {
          input: {
            height: pxToRem(64),
            fontsize: pxToRem(18),
            label: theme('spacing.6'),
          },
          textarea: {
            height: pxToRem(176),
            fontsize: pxToRem(18),
          },
          radio: {
            inputsize: pxToRem(32),
            inputMarginTop: pxToRem(1),
            fontsize: pxToRem(18),
          },
        },
      }),
      edsFormStatus: theme => ({
        error: theme('colors.red.DEFAULT'),
        warning: theme('colors.orange.DEFAULT'),
        success: theme('colors.green.dark'),
        loading: theme('colors.teal.dark'),
      }),
    },
    variants: {
      edsForm: ['responsive'],
    },
  },
);

module.exports = form;