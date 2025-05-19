const core = require('../config/core.js');

module.exports = {
  presets: [core],
  theme: {
    colors: core.theme.colors,
    fontFamily: core.theme.fontFamily,
    fontSize: core.theme.fontSize,
    fontWeight: core.theme.fontWeight,
  },
};
