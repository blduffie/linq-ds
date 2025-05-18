const preset = require('./src/config/core.js');
const util = require('./src/util.js');

module.exports = {
  preset,
  plugins: preset.plugins || [],
  util,
};
