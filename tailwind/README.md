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
@import 'linq-ds/tailwind/material/material-theme';
```

This will apply your primary, accent, and warn colors as defined in the design tokens, as well as typography settings.

---

## 🛠️ Development

To test your changes locally in another project:

1. Build your changes in `linq-ds`.
2. Use [`npm link`](https://docs.npmjs.com/cli/v7/commands/npm-link) or [`yalc`](https://github.com/wclr/yalc) to try out changes without publishing.

---

## 📦 Publishing

When ready, publish to your private or public NPM registry:

```bash
npm version patch
npm publish --access public
```

---

