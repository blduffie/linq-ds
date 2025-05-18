const preset = require('./src/config/core.js');
const util = require('./src/util.js');

module.exports = {
  preset,
  presetLinq: require('./themes/linq.js'),
  plugins: {
    aspectRatio: require('./plugins/aspect-ratio'),
    base: require('./plugins/base'),
    button: require('./plugins/button'),
    container: require('./plugins/container'),
    focus: require('./plugins/focus'),
    fontFace: require('./plugins/font-face'),
    form: require('./plugins/form'),
    icon: require('./plugins/icon'),
    identifier: require('./plugins/identifier'),
    link: require('./plugins/link'),
    logo: require('./plugins/logo'),
    richText: require('./plugins/rich-text'),
    typography: require('./plugins/typography'),
  },
  util,
};
