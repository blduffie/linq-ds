const plugin = require('tailwindcss/plugin');
const { pxToRem } = require('../../util');

module.exports = plugin(({ addBase, theme }) => {
  const faces = theme('linqFontFace', {});
  Object.entries(faces).forEach(([family, styles]) => {
    styles.forEach(
      ({ file, weight = 400, style = 'normal', display = 'auto' }) => {
        addBase({
          '@font-face': {
            fontFamily: `'${family}'`,
            fontWeight: weight,
            fontStyle: style,
            fontDisplay: display,
            src: [
              `url("${file}.woff2") format("woff2")`,
              `url("${file}.woff") format("woff")`,
            ].join(', '),
          },
        });
      }
    );
  });
});