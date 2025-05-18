# LINQ Design System for TailwindCSS & Angular Material

**Official LINQ Design System**
Centralized design tokens, TailwindCSS preset, Angular Material theme, and branded assets for all LINQ web applications.

- Design tokens (colors, spacing, typography)
- Tailwind CSS preset with brand theme
- Angular Material theme SCSS
- LINQ logos, icons, and fonts

---

## Getting Started

### 1. **Install TailwindCSS**

Follow the official guide:
<https://tailwindcss.com/docs/installation>

### 2. **Install the LINQ Design System NPM Package**

```bash
npm install -D linq-ds/tailwind
```

### 3. **Create/Update Your Tailwind Config**

At your project root:

```bash
touch tailwind.config.js
```

### 4. **Reference the LINQ Theme Preset in Your Tailwind Config**

Edit your `tailwind.config.js` to use the LINQ design system preset:

```js
module.exports = {
  presets: [
    require('linq-ds/tailwind/themes/linq'),
  ],
  content: [
    './src/**/*.{html,ts,js,scss}',
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## 🎨 Theming with Angular Material

To ensure full branding consistency, import the provided SCSS for Angular Material theming in your global styles (usually `src/styles.scss`):

```scss
@import 'linq-ds/tailwind/scss/material-theme';
```

This will apply your primary, accent, and warn colors as defined in the design tokens, as well as typography settings.

---

## 📁 Directory Structure

| Folder/file                 | Purpose                                                |
|-----------------------------|--------------------------------------------------------|
| `src/assets/`               | LINQ SVGs, logos, icons, fonts                        |
| `src/presets/`              | Tailwind preset configuration file                    |
| `src/tw-plugins/`           | Tailwind Plugins (color, typography, spacing, etc.)   |
| `src/material/`             | Angular Material SCSS theme and utilities             |
| `README.md`                 | You’re reading it!                                    |
| `package.json`              | NPM package config                                    |

---

## 🖼️ Using Assets

Reference any SVG, icon, or font files in your project by pointing to
`node_modules/linq-ds/tailwind/assets/` (adjust for actual published path).

Example for an SVG in your component:

```html
<img src="node_modules/linq-ds/tailwind/assets/logo.svg" alt="LINQ logo">
```

For fonts, the Tailwind preset or Material theme SCSS will typically include `@font-face` definitions that pull from the assets folder.

---

## 🔗 Tailwind Customization

You can further customize your Tailwind setup by adding or extending the `theme` property in your local `tailwind.config.js`.
See the [Tailwind documentation on theme configuration](https://tailwindcss.com/docs/theme).

---

## 🤝 Contributing

If you want to contribute, please:

- Fork the repository
- Make changes in a feature branch
- Open a pull request with a clear description

For bug reports or feature requests, please file an issue.

---

## 📝 Example Usage

```js
// tailwind.config.js
module.exports = {
  presets: [
    require('linq-ds/tailwind/themes/linq'),
  ],
  content: [
    './src/**/*.{html,ts,js,scss}',
  ],
  theme: {
    extend: {},
  },
};
```

```scss
// styles.scss
@import 'linq-ds/tailwind/scss/material-theme';
```

---

## 🛠️ Development

All design tokens are in `src/tokens/`.
Modify these to update colors, typography, spacing, etc.

To test your changes locally in another project:

1. Build your changes in `linq-ds`.
2. Use [`npm link`](https://docs.npmjs.com/cli/v7/commands/npm-link) or [`yalc`](https://github.com/wclr/yalc) to try out changes without publishing.

---

## 📦 Publishing

When ready, publish to your private or public NPM registry:

```bash
npm version patch # or minor/major as appropriate
npm publish --access public  # or --access restricted
```

---

## 📝 License

Choose a license that fits your organization’s needs. MIT is common for design systems.

---

> Questions? Feedback? Please open an issue or reach out to the maintainers.
