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
        lighter: '#b2e3f0',
        light: '#63b3dd',
        DEFAULT: '#0074b3',
        dark: '#004a64',
        darker: '#004a64',
      },
      teal: {
        lighter: '#edf6fd',
        light: '#63b3dd',
        DEFAULT: '#0074b3',
        dark: '#0074b3',
        darker: '#0074b3',
      },
      red: {
        DEFAULT: '#9e1b32',
        dark: '#8b0e04',
      },
      orange: {
        DEFAULT: '#f89728',
      },
      yellow: {
        DEFAULT: '#e8d723',
        dark: '#fdb913',
      },
      green: {
        light: '#f4f9e4',
        DEFAULT: '#9ac43c',
        dark: '#00853f',
      },
      purple: {
        DEFAULT: '#8ca4d5',
      },
    }
  }
}