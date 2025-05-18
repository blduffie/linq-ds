const plugin = require('tailwindcss/plugin');
const defaultValues = require('./defaultValues');

module.exports = plugin(function({ addBase, theme }) {
  const fontFace = theme('edsFontFace', {});

  Object.entries(fontFace).map(([family, styles]) => {
    styles.map(({ file, weight = 400, style = 'normal', display = 'auto' }) => {
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
    });
  });
}, defaultValues);
