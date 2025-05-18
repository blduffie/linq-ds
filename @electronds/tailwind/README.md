# Electron Design System Configuration for TailwindCSS

## How to get setup

1. Install TailwindCSS
  - https://tailwindcss.com/docs/installation
2. Install ElectronDS 'tailwind' npm package
  - `npm install -D @electronds/tailwind`
3. `touch tailwind.config.js` at project root
4. Reference the ElectronDS 'tailwind' theme presets from @electronds/tailwind in your tailwind.config.js file:

## Configure your local `tailwind.config.js` file

Customize your Tailwind configuration to suit your projects needs.

```
module.exports = {
  presets: [
    require('@electronds/tailwind/themes/duke-energy'),
  ],
  content: [
    './src/**/*.{njk,md,html,js}',
    './public/**/*.html',
  ],
  theme: {
    edsFontFace: {
      NewsGothic: [
        {
          file: '../fonts/newsgothicbt-light',
          weight: 100,
        },
        {
          file: '../fonts/newsgothicbt-roman',
          weight: 400,
        },
        {
          file: '../fonts/newsgothicbt-bold',
          weight: 700,
        },
      ],
    },
    extend: {},
  },
  plugins: [],
}
```

See tailwind docs for more about [theme configuration](https://tailwindcss.com/docs/theme)
