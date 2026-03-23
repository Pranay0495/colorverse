# Contributing to Colorverse

Thank you for helping grow the world's most comprehensive color palette reference! 🎨

## How to Add a Palette

1. **Fork** the repository
2. Open `js/palettes.js`
3. Add your palette object to the `PALETTES` array
4. Follow the schema below
5. Submit a **Pull Request** with a clear title like `Add: [Palette Name]`

### Palette Schema

```js
{
  id: "unique-kebab-id",         // Required. Must be unique across all palettes.
  name: "Display Name",          // Required. Short, descriptive, title-cased.
  category: "Category Name",     // Required. Use an existing category if it fits.
  style: "Style Name",           // Required. Use an existing style if it fits.
  tags: ["Tag1", "Tag2"],        // Required. 3–6 searchable tags.
  colors: [                      // Required. Exactly 5 colors recommended.
    { name: "Color Name", hex: "#RRGGBB" },
    { name: "Color Name", hex: "#RRGGBB" },
    { name: "Color Name", hex: "#RRGGBB" },
    { name: "Color Name", hex: "#RRGGBB" },
    { name: "Color Name", hex: "#RRGGBB" },
  ]
}
```

### Existing Categories
- UI / Web
- Design System
- Nature
- Cultural
- Monochromatic
- Pastel
- Dark & Moody
- Vintage / Retro
- Branding
- Gradient
- Accessible
- Seasonal
- Food & Beverage
- Sports & Energy
- Tech / Developer
- Fashion
- Interior / Home
- Flags
- Pride / Inclusive
- Editorial

If your palette doesn't fit any existing category, you may propose a new one in your PR.

### Quality Guidelines

- ✅ All hex codes must be valid 6-character hex (e.g. `#A1B2C3`)
- ✅ Color names should be evocative and descriptive (e.g. "Dusty Lavender", not just "Light Purple")
- ✅ Palettes should have clear visual harmony or cultural/historical significance
- ✅ Prefer 5 colors per palette (min 3, max 7)
- ✅ IDs must be unique — check existing IDs before adding
- ✅ Tags should be searchable terms users would actually type
- ❌ No duplicate palettes
- ❌ No offensive or inappropriate content

## Reporting Issues

Open a [GitHub Issue](https://github.com/yourusername/colorverse/issues) for:
- Bug reports (UI glitches, copy not working, etc.)
- Palette requests (suggest a palette you'd like to see)
- Feature ideas

## License

By contributing, you agree your additions are released under the MIT License.
