# 🎨 Colorverse — World Color Palettes Reference

> A comprehensive, free reference of **100+ color palettes** from every culture, design system, trend, and aesthetic. Click any swatch to copy hex codes. Zero signup. Completely free.

![Colorverse Preview](assets/preview.png)

## ✨ Features

- **100+ curated palettes** — UI/Web, Nature, Cultural, Seasonal, Brand, Gradient, Accessibility, and more
- **Click to copy** — click any swatch to copy its hex code instantly
- **Multiple code formats** — generate CSS Custom Properties, Tailwind config, SCSS variables, or JavaScript objects in one click
- **Filter by category** — browse by UI/Web, Nature, Cultural, Branding, Dark/Moody, Vintage/Retro, Gradient, Accessible, and more
- **Filter by style** — Soft & Muted, Bold & Vibrant, Dark Mode, Material Design, Tailwind CSS, Retro, Coastal, Earthy...
- **Instant search** — search by palette name, color name, hex, category, style, or tags (`⌘K` / `Ctrl+K`)
- **Grid & List view** — switch between compact grid and detailed list layouts
- **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript (ES Modules), no build step required

## 🗂 Palette Categories

| Category | Examples |
|---|---|
| UI / Web | Cloud Drift, Dopamine Pop, Dark SaaS, Aurora UI, Glassmorphism |
| Design System | Material Blue/Teal/Purple, Tailwind Sky/Violet/Emerald |
| Nature | Deep Forest, Ocean Shore, Cherry Blossom, Aurora Borealis, Autumn Harvest |
| Cultural | Wabi-Sabi, Indian Festival, Mediterranean, Scandinavian Hygge, Moroccan Bazaar |
| Monochromatic | Slate, Rose, Amber, Cyan mono ramps |
| Pastel | Cotton Candy, Macaron, Spring Breeze |
| Dark & Moody | Midnight Luxe, Cyberpunk, Gothic Noir, Terminal Green |
| Vintage / Retro | 70s Groove, 80s Synthwave, 90s Vaporwave, Art Deco |
| Branding | Startup Fresh, Luxury Brand, Eco Brand, Fintech Trust |
| Gradient | Sunset, Ocean, Northern Lights, Rose Gold |
| Accessible | WCAG AA/AAA compliant palettes |
| Seasonal | Winter Solstice, Spring Garden, Summer Solstice, Autumn Leaves |
| Food & Beverage | Café Warm, Fresh Produce |
| Sports & Energy | Sports Energy, Neon Sport |
| Tech / Developer | Terminal Green, GitHub Dark, AI Futuristic |
| Fashion | Parisian Chic, Streetwear |
| Interior / Home | Coastal Living, Moody Interior, Boho Chic |
| Flags | India Tricolor, USA Patriotic, Japan Rising Sun |
| Pride / Inclusive | Rainbow Pride, Trans, Bisexual flag palettes |
| Editorial | Editorial Mono, Magazine Bold |

## 🚀 Getting Started

### Option 1: Open directly in browser
Just open `index.html` — no server required.

### Option 2: Local server (recommended for development)
```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .

# Then open: http://localhost:8080
```

### Option 3: Deploy to GitHub Pages
1. Fork this repo
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch → main**
4. Your site will be live at `https://yourusername.github.io/colorverse`

## 📁 Project Structure

```
colorverse/
├── index.html          # Main HTML page
├── css/
│   └── style.css       # All styles
├── js/
│   ├── app.js          # App logic, rendering, interactivity
│   └── palettes.js     # All palette data (the database)
├── README.md
└── CONTRIBUTING.md
```

## ➕ Adding a New Palette

Open `js/palettes.js` and add an entry to the `PALETTES` array:

```js
{
  id: "unique-id",               // kebab-case, must be unique
  name: "My Palette Name",
  category: "UI / Web",          // see existing categories
  style: "Soft & Muted",         // see existing styles
  tags: ["Tag1", "Tag2"],        // searchable keywords
  colors: [
    { name: "Color Name", hex: "#RRGGBB" },
    { name: "Color Name", hex: "#RRGGBB" },
    { name: "Color Name", hex: "#RRGGBB" },
    { name: "Color Name", hex: "#RRGGBB" },
    { name: "Color Name", hex: "#RRGGBB" },
  ]
}
```

Then submit a Pull Request! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 💻 Using Palette Code

For each palette, Colorverse generates ready-to-use code in 4 formats:

### CSS Custom Properties
```css
:root {
  --cloud-drift-cloud-base: #F0EEE9;
  --cloud-drift-warm-mist: #DDD8D0;
  --cloud-drift-dusty-lavender: #B8B4C8;
  --cloud-drift-sage-muted: #8FA89A;
  --cloud-drift-slate-text: #4A5568;
}
```

### Tailwind CSS
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'cloud-drift': {
          '50': '#F0EEE9',
          '200': '#DDD8D0',
          // ...
        },
      },
    },
  },
};
```

### SCSS Variables
```scss
$cloud-drift-cloud-base: #F0EEE9;
$cloud-drift-warm-mist: #DDD8D0;
// ...
```

### JavaScript Object
```js
const cloudDrift = {
  "cloudBase": "#F0EEE9",
  "warmMist": "#DDD8D0",
  // ...
};
```

## 🤝 Contributing

Contributions are very welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md).

Ideas to contribute:
- New palettes from underrepresented cultures or regions
- Additional design system palettes (IBM Carbon, Ant Design, Chakra UI…)
- New seasonal or trend-based palettes
- Bug fixes or UI improvements

## 📄 License

MIT License — free for personal and commercial use.

---

Developed by **CA Pranay S. Jajodia** | Made with ❤️ for the global design community. If this helped you, ⭐ star the repo!
