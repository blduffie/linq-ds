module.exports = {
  presets: [
    require('../config/core'),
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        lighter: '#f2f4f4',
        light: '#dfe4e4',
        DEFAULT: '#d7d9da',
        dark: '#696969',
        darker: '#4c4c4c',
      },
      blue: {
        DEFAULT: '#005984',
        dark: '#014464',
      },
      teal: {
        lighter: '#f3fbfd',
        light: '#e0f6fb',
        DEFAULT: '#a7e1ea',
        dark: '#26bcd7',
        darker: '#00789e',
      },
      red: {
        DEFAULT: '#9e1b32',
        dark: '#8B0E04',
      },
      orange: {
        DEFAULT: '#f78e1e',
      },
      yellow: {
        DEFAULT: '#ffd200',
        dark: '#fdb913',
      },
      green: {
        DEFAULT: '#54b948',
        dark: '#00853f',
      },
    }
  }
}