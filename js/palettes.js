// ============================================================
// COLORVERSE — World Color Palettes Database
// Comprehensive collection of color palettes from all styles,
// cultures, design systems, and trends worldwide.
// ============================================================

const PALETTES = [

  // ─── UI / WEB DESIGN ────────────────────────────────────────

  {
    id: "soft-cloud-drift",
    name: "Cloud Drift",
    category: "UI / Web",
    style: "Soft & Muted",
    tags: ["2026", "SaaS", "Wellness", "Dashboard", "Trending"],
    colors: [
      { name: "Cloud Base", hex: "#F0EEE9" },
      { name: "Warm Mist", hex: "#DDD8D0" },
      { name: "Dusty Lavender", hex: "#B8B4C8" },
      { name: "Sage Muted", hex: "#8FA89A" },
      { name: "Slate Text", hex: "#4A5568" }
    ]
  },
  {
    id: "petal-stone",
    name: "Petal & Stone",
    category: "UI / Web",
    style: "Soft & Muted",
    tags: ["2026", "E-commerce", "Lifestyle", "Mobile"],
    colors: [
      { name: "Warm Paper", hex: "#F5EDE8" },
      { name: "Blush Stone", hex: "#E8D0C8" },
      { name: "Muted Rose", hex: "#C4998A" },
      { name: "Clay Deep", hex: "#8C6860" },
      { name: "Espresso", hex: "#3D2B27" }
    ]
  },
  {
    id: "mint-clarity",
    name: "Mint Clarity",
    category: "UI / Web",
    style: "Soft & Muted",
    tags: ["2026", "Health", "Wellness", "Clean-tech"],
    colors: [
      { name: "Foam White", hex: "#EEF5F2" },
      { name: "Soft Mint", hex: "#C4E0D6" },
      { name: "Celadon", hex: "#7BBFAA" },
      { name: "Teal Anchor", hex: "#3D8C78" },
      { name: "Deep Forest", hex: "#1A3D34" }
    ]
  },
  {
    id: "dopamine-pop",
    name: "Dopamine Pop",
    category: "UI / Web",
    style: "Bold & Vibrant",
    tags: ["2026", "Youth", "Lifestyle", "Social", "Trending"],
    colors: [
      { name: "Warm White", hex: "#FFF0EB" },
      { name: "Neon Coral", hex: "#FF6B5B" },
      { name: "Sunny Yellow", hex: "#FFD93D" },
      { name: "Electric Blue", hex: "#2196F3" },
      { name: "Deep Navy", hex: "#1A1A2E" }
    ]
  },
  {
    id: "acid-neutral",
    name: "Acid + Neutral",
    category: "UI / Web",
    style: "Bold & Vibrant",
    tags: ["2026", "AI Products", "SaaS", "CTA-forward"],
    colors: [
      { name: "Warm Gray", hex: "#F4F4F0" },
      { name: "Soft Stone", hex: "#E8E8E2" },
      { name: "Acid Lime", hex: "#C8F000" },
      { name: "Carbon", hex: "#1C1C1C" },
      { name: "Near Black", hex: "#0A0A0A" }
    ]
  },
  {
    id: "bold-retro",
    name: "Bold Retro",
    category: "UI / Web",
    style: "Retro / Vintage",
    tags: ["2026", "Brand-forward", "Playful", "Retro"],
    colors: [
      { name: "Parchment", hex: "#FDF6EC" },
      { name: "Burnt Orange", hex: "#E8934A" },
      { name: "Deep Mustard", hex: "#D4A017" },
      { name: "Dusty Cyan", hex: "#6BBFBE" },
      { name: "Vintage Plum", hex: "#4A2040" }
    ]
  },
  {
    id: "ocean-tech",
    name: "Ocean Tech",
    category: "UI / Web",
    style: "Cool & Minimal",
    tags: ["SaaS", "Fintech", "B2B", "Professional"],
    colors: [
      { name: "Ice Surface", hex: "#F0F7FF" },
      { name: "Pale Sky", hex: "#DBEAFE" },
      { name: "Ocean Blue", hex: "#3B82F6" },
      { name: "Deep Sea", hex: "#1E40AF" },
      { name: "Midnight", hex: "#0F172A" }
    ]
  },
  {
    id: "dark-saas",
    name: "Dark SaaS",
    category: "UI / Web",
    style: "Dark Mode",
    tags: ["Dark Mode", "SaaS", "Developer", "Premium"],
    colors: [
      { name: "Void", hex: "#0A0A0F" },
      { name: "Surface", hex: "#13131A" },
      { name: "Panel", hex: "#1E1E2E" },
      { name: "Muted Border", hex: "#313244" },
      { name: "Accent Violet", hex: "#CBA6F7" }
    ]
  },
  {
    id: "aurora-ui",
    name: "Aurora UI",
    category: "UI / Web",
    style: "Bold & Vibrant",
    tags: ["Creative", "Agency", "Bold", "Gradient-ready"],
    colors: [
      { name: "Deep Space", hex: "#0D0D1A" },
      { name: "Nebula Purple", hex: "#6C63FF" },
      { name: "Aurora Pink", hex: "#FF6B9D" },
      { name: "Neon Teal", hex: "#00F5D4" },
      { name: "Star White", hex: "#F0F0FF" }
    ]
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    category: "UI / Web",
    style: "Modern Trend",
    tags: ["Glassmorphism", "2024", "iOS", "Trendy"],
    colors: [
      { name: "Ghost White", hex: "#FAFAFF" },
      { name: "Glass Blue", hex: "#A8C8FF" },
      { name: "Glass Purple", hex: "#C8A8FF" },
      { name: "Glass Pink", hex: "#FFA8D5" },
      { name: "Frosted Dark", hex: "#1A1A2E" }
    ]
  },

  // ─── MATERIAL / DESIGN SYSTEMS ──────────────────────────────

  {
    id: "material-blue",
    name: "Material Blue",
    category: "Design System",
    style: "Material Design",
    tags: ["Google", "Material", "System", "Blue"],
    colors: [
      { name: "Blue 50", hex: "#E3F2FD" },
      { name: "Blue 300", hex: "#64B5F6" },
      { name: "Blue 500", hex: "#2196F3" },
      { name: "Blue 700", hex: "#1976D2" },
      { name: "Blue 900", hex: "#0D47A1" }
    ]
  },
  {
    id: "material-teal",
    name: "Material Teal",
    category: "Design System",
    style: "Material Design",
    tags: ["Google", "Material", "System", "Teal"],
    colors: [
      { name: "Teal 50", hex: "#E0F2F1" },
      { name: "Teal 200", hex: "#80CBC4" },
      { name: "Teal 500", hex: "#009688" },
      { name: "Teal 700", hex: "#00796B" },
      { name: "Teal 900", hex: "#004D40" }
    ]
  },
  {
    id: "material-deep-purple",
    name: "Material Deep Purple",
    category: "Design System",
    style: "Material Design",
    tags: ["Google", "Material", "System", "Purple"],
    colors: [
      { name: "DeepPurple 50", hex: "#EDE7F6" },
      { name: "DeepPurple 200", hex: "#B39DDB" },
      { name: "DeepPurple 500", hex: "#673AB7" },
      { name: "DeepPurple 700", hex: "#512DA8" },
      { name: "DeepPurple 900", hex: "#311B92" }
    ]
  },
  {
    id: "tailwind-sky",
    name: "Tailwind Sky",
    category: "Design System",
    style: "Tailwind CSS",
    tags: ["Tailwind", "CSS", "Framework", "Sky"],
    colors: [
      { name: "Sky 50", hex: "#F0F9FF" },
      { name: "Sky 200", hex: "#BAE6FD" },
      { name: "Sky 500", hex: "#0EA5E9" },
      { name: "Sky 700", hex: "#0369A1" },
      { name: "Sky 950", hex: "#082F49" }
    ]
  },
  {
    id: "tailwind-violet",
    name: "Tailwind Violet",
    category: "Design System",
    style: "Tailwind CSS",
    tags: ["Tailwind", "CSS", "Framework", "Violet"],
    colors: [
      { name: "Violet 50", hex: "#F5F3FF" },
      { name: "Violet 200", hex: "#DDD6FE" },
      { name: "Violet 500", hex: "#8B5CF6" },
      { name: "Violet 700", hex: "#6D28D9" },
      { name: "Violet 950", hex: "#2E1065" }
    ]
  },
  {
    id: "tailwind-emerald",
    name: "Tailwind Emerald",
    category: "Design System",
    style: "Tailwind CSS",
    tags: ["Tailwind", "CSS", "Framework", "Green"],
    colors: [
      { name: "Emerald 50", hex: "#ECFDF5" },
      { name: "Emerald 200", hex: "#A7F3D0" },
      { name: "Emerald 500", hex: "#10B981" },
      { name: "Emerald 700", hex: "#047857" },
      { name: "Emerald 950", hex: "#022C22" }
    ]
  },

  // ─── NATURE INSPIRED ────────────────────────────────────────

  {
    id: "forest-deep",
    name: "Deep Forest",
    category: "Nature",
    style: "Earthy & Organic",
    tags: ["Nature", "Green", "Organic", "Sustainability"],
    colors: [
      { name: "Fog", hex: "#E8EDE6" },
      { name: "Fern", hex: "#9DB59A" },
      { name: "Moss", hex: "#5C7A5A" },
      { name: "Deep Pine", hex: "#2D4A2C" },
      { name: "Bark", hex: "#1A2E19" }
    ]
  },
  {
    id: "ocean-shore",
    name: "Ocean Shore",
    category: "Nature",
    style: "Coastal",
    tags: ["Ocean", "Blue", "Coastal", "Calm"],
    colors: [
      { name: "Sea Foam", hex: "#E0F4F1" },
      { name: "Shallow Water", hex: "#7ECCC0" },
      { name: "Wave", hex: "#1B9AAA" },
      { name: "Deep Ocean", hex: "#05668D" },
      { name: "Midnight Sea", hex: "#02334A" }
    ]
  },
  {
    id: "desert-sunset",
    name: "Desert Sunset",
    category: "Nature",
    style: "Warm & Earthy",
    tags: ["Desert", "Warm", "Earthy", "Sunset"],
    colors: [
      { name: "Sand", hex: "#F5E6C8" },
      { name: "Dune", hex: "#E6C9A2" },
      { name: "Terra", hex: "#C0714A" },
      { name: "Canyon", hex: "#8B3A22" },
      { name: "Dark Earth", hex: "#3D1A0A" }
    ]
  },
  {
    id: "cherry-blossom",
    name: "Cherry Blossom",
    category: "Nature",
    style: "Soft & Pastel",
    tags: ["Japan", "Spring", "Blossom", "Pastel"],
    colors: [
      { name: "Petal White", hex: "#FFF0F3" },
      { name: "Blush", hex: "#FFD1DC" },
      { name: "Sakura", hex: "#FFADC0" },
      { name: "Deep Rose", hex: "#E85D82" },
      { name: "Bark Brown", hex: "#5C3A2E" }
    ]
  },
  {
    id: "aurora-borealis",
    name: "Aurora Borealis",
    category: "Nature",
    style: "Cosmic & Dark",
    tags: ["Aurora", "Night", "Dark", "Cosmic"],
    colors: [
      { name: "Arctic Night", hex: "#0A0F1E" },
      { name: "Deep Teal", hex: "#0D3D3A" },
      { name: "Aurora Green", hex: "#00B894" },
      { name: "Violet Streak", hex: "#A855F7" },
      { name: "Ice Blue", hex: "#7DD3FC" }
    ]
  },
  {
    id: "wildflower-meadow",
    name: "Wildflower Meadow",
    category: "Nature",
    style: "Earthy & Organic",
    tags: ["Floral", "Spring", "Colorful", "Bright"],
    colors: [
      { name: "Cream", hex: "#FBF5E6" },
      { name: "Marigold", hex: "#F6AE2D" },
      { name: "Lavender", hex: "#9B5DE5" },
      { name: "Grass", hex: "#3D9970" },
      { name: "Poppy", hex: "#E63946" }
    ]
  },
  {
    id: "autumn-harvest",
    name: "Autumn Harvest",
    category: "Nature",
    style: "Warm & Earthy",
    tags: ["Autumn", "Fall", "Warm", "Earthy"],
    colors: [
      { name: "Cream Pumpkin", hex: "#FFF3E0" },
      { name: "Gold Leaf", hex: "#F59E0B" },
      { name: "Maple Red", hex: "#DC2626" },
      { name: "Chestnut", hex: "#92400E" },
      { name: "Walnut", hex: "#3D1C02" }
    ]
  },
  {
    id: "tropical-paradise",
    name: "Tropical Paradise",
    category: "Nature",
    style: "Bold & Vibrant",
    tags: ["Tropical", "Bright", "Summer", "Vibrant"],
    colors: [
      { name: "Coconut", hex: "#FFFBEB" },
      { name: "Mango", hex: "#FF9A3C" },
      { name: "Parrot Green", hex: "#2ECC40" },
      { name: "Lagoon", hex: "#00B4D8" },
      { name: "Hibiscus", hex: "#E91E8C" }
    ]
  },

  // ─── CULTURAL / WORLD ───────────────────────────────────────

  {
    id: "japanese-wabi",
    name: "Wabi-Sabi",
    category: "Cultural",
    style: "Japanese",
    tags: ["Japan", "Minimalist", "Zen", "Neutral"],
    colors: [
      { name: "Rice Paper", hex: "#F5F0E8" },
      { name: "Bamboo", hex: "#D4C5A0" },
      { name: "Ash", hex: "#9E9E8E" },
      { name: "Indigo", hex: "#3D4B6B" },
      { name: "Sumi Black", hex: "#1A1A18" }
    ]
  },
  {
    id: "indian-festival",
    name: "Indian Festival",
    category: "Cultural",
    style: "Indian",
    tags: ["India", "Vibrant", "Festival", "Holi"],
    colors: [
      { name: "Turmeric", hex: "#F5C518" },
      { name: "Saffron", hex: "#FF7518" },
      { name: "Fuchsia", hex: "#CC0066" },
      { name: "Peacock", hex: "#006666" },
      { name: "Deep Maroon", hex: "#7B0D1E" }
    ]
  },
  {
    id: "mediterranean",
    name: "Mediterranean",
    category: "Cultural",
    style: "European",
    tags: ["Mediterranean", "Greece", "Italy", "Blue", "White"],
    colors: [
      { name: "Plaster", hex: "#F7F5EF" },
      { name: "Sea Glass", hex: "#A8C5B5" },
      { name: "Aegean", hex: "#2B6CB0" },
      { name: "Terracotta", hex: "#C05A3D" },
      { name: "Olive Night", hex: "#2D3A22" }
    ]
  },
  {
    id: "scandinavian-hygge",
    name: "Scandinavian Hygge",
    category: "Cultural",
    style: "Nordic",
    tags: ["Nordic", "Hygge", "Minimal", "Cozy"],
    colors: [
      { name: "Snow", hex: "#F9F8F6" },
      { name: "Linen", hex: "#EDE8DF" },
      { name: "Birch", hex: "#C4B89A" },
      { name: "Fjord Blue", hex: "#4A6FA5" },
      { name: "Nordic Night", hex: "#1A2744" }
    ]
  },
  {
    id: "moroccan-bazaar",
    name: "Moroccan Bazaar",
    category: "Cultural",
    style: "Middle Eastern",
    tags: ["Morocco", "Warm", "Spice", "Rich"],
    colors: [
      { name: "Sand Dune", hex: "#F2E2C4" },
      { name: "Copper", hex: "#C1813E" },
      { name: "Saffron Deep", hex: "#E07B39" },
      { name: "Cobalt Tile", hex: "#1B5EA3" },
      { name: "Kohl Black", hex: "#1A1209" }
    ]
  },
  {
    id: "mexican-fiesta",
    name: "Mexican Fiesta",
    category: "Cultural",
    style: "Latin American",
    tags: ["Mexico", "Vibrant", "Fiesta", "Bold"],
    colors: [
      { name: "Cream Corn", hex: "#FFF9C4" },
      { name: "Marigold", hex: "#FFC107" },
      { name: "Fiesta Pink", hex: "#E91E8C" },
      { name: "Parrot Blue", hex: "#03A9F4" },
      { name: "Dark Bark", hex: "#3E1A00" }
    ]
  },
  {
    id: "african-savanna",
    name: "African Savanna",
    category: "Cultural",
    style: "African",
    tags: ["Africa", "Warm", "Earthy", "Wild"],
    colors: [
      { name: "Dry Grass", hex: "#F0D98C" },
      { name: "Savanna", hex: "#D4A853" },
      { name: "Rust Red", hex: "#B5451B" },
      { name: "Acacia", hex: "#5C3D11" },
      { name: "Night Sky", hex: "#0D1B2A" }
    ]
  },
  {
    id: "chinese-imperial",
    name: "Chinese Imperial",
    category: "Cultural",
    style: "Chinese",
    tags: ["China", "Imperial", "Luxury", "Red", "Gold"],
    colors: [
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Jade", hex: "#00A86B" },
      { name: "Imperial Red", hex: "#E03A3E" },
      { name: "Imperial Gold", hex: "#D4AF37" },
      { name: "Dynasty Black", hex: "#1A0A00" }
    ]
  },
  {
    id: "south-american-amazon",
    name: "Amazon Rainforest",
    category: "Cultural",
    style: "Latin American",
    tags: ["Amazon", "Tropical", "Green", "Rich"],
    colors: [
      { name: "Morning Mist", hex: "#E8F5E9" },
      { name: "Canopy", hex: "#66BB6A" },
      { name: "Deep Jungle", hex: "#1B5E20" },
      { name: "Toucan Yellow", hex: "#FDD835" },
      { name: "River Dark", hex: "#0A2414" }
    ]
  },
  {
    id: "russian-folk",
    name: "Russian Folk",
    category: "Cultural",
    style: "Eastern European",
    tags: ["Russia", "Folk", "Winter", "Bold"],
    colors: [
      { name: "Birch White", hex: "#F5F5F0" },
      { name: "Frost Blue", hex: "#90CAF9" },
      { name: "Kokoshnik Red", hex: "#C62828" },
      { name: "Pine Green", hex: "#2E7D32" },
      { name: "Onion Dome Gold", hex: "#F9A825" }
    ]
  },

  // ─── MONOCHROMATIC ──────────────────────────────────────────

  {
    id: "mono-slate",
    name: "Slate Mono",
    category: "Monochromatic",
    style: "Monochromatic",
    tags: ["Mono", "Gray", "Minimal", "Clean"],
    colors: [
      { name: "Slate 50", hex: "#F8FAFC" },
      { name: "Slate 200", hex: "#E2E8F0" },
      { name: "Slate 400", hex: "#94A3B8" },
      { name: "Slate 700", hex: "#334155" },
      { name: "Slate 950", hex: "#020617" }
    ]
  },
  {
    id: "mono-rose",
    name: "Rose Mono",
    category: "Monochromatic",
    style: "Monochromatic",
    tags: ["Mono", "Pink", "Feminine", "Soft"],
    colors: [
      { name: "Rose 50", hex: "#FFF1F2" },
      { name: "Rose 200", hex: "#FECDD3" },
      { name: "Rose 400", hex: "#FB7185" },
      { name: "Rose 600", hex: "#E11D48" },
      { name: "Rose 900", hex: "#881337" }
    ]
  },
  {
    id: "mono-amber",
    name: "Amber Mono",
    category: "Monochromatic",
    style: "Monochromatic",
    tags: ["Mono", "Amber", "Warm", "Golden"],
    colors: [
      { name: "Amber 50", hex: "#FFFBEB" },
      { name: "Amber 200", hex: "#FDE68A" },
      { name: "Amber 400", hex: "#FBBF24" },
      { name: "Amber 600", hex: "#D97706" },
      { name: "Amber 900", hex: "#78350F" }
    ]
  },
  {
    id: "mono-cyan",
    name: "Cyan Mono",
    category: "Monochromatic",
    style: "Monochromatic",
    tags: ["Mono", "Cyan", "Cool", "Digital"],
    colors: [
      { name: "Cyan 50", hex: "#ECFEFF" },
      { name: "Cyan 200", hex: "#A5F3FC" },
      { name: "Cyan 400", hex: "#22D3EE" },
      { name: "Cyan 600", hex: "#0891B2" },
      { name: "Cyan 900", hex: "#164E63" }
    ]
  },

  // ─── PASTEL ─────────────────────────────────────────────────

  {
    id: "cotton-candy",
    name: "Cotton Candy",
    category: "Pastel",
    style: "Soft & Pastel",
    tags: ["Pastel", "Soft", "Playful", "Sweet"],
    colors: [
      { name: "Sugar", hex: "#FFF5FB" },
      { name: "Baby Pink", hex: "#FFD6F0" },
      { name: "Lavender Soft", hex: "#DDD6FE" },
      { name: "Baby Blue", hex: "#BAE6FD" },
      { name: "Mint", hex: "#A7F3D0" }
    ]
  },
  {
    id: "macaron",
    name: "Macaron",
    category: "Pastel",
    style: "Soft & Pastel",
    tags: ["Pastel", "French", "Sweet", "Elegant"],
    colors: [
      { name: "Vanilla", hex: "#FFF8E7" },
      { name: "Pistachio", hex: "#C5E8BC" },
      { name: "Lavender", hex: "#D8BBF5" },
      { name: "Strawberry", hex: "#FFCCD5" },
      { name: "Caramel", hex: "#E8C07A" }
    ]
  },
  {
    id: "spring-breeze",
    name: "Spring Breeze",
    category: "Pastel",
    style: "Soft & Pastel",
    tags: ["Pastel", "Spring", "Fresh", "Light"],
    colors: [
      { name: "White Mist", hex: "#FAFFF9" },
      { name: "Soft Green", hex: "#DCFCE7" },
      { name: "Butter", hex: "#FEF9C3" },
      { name: "Petal", hex: "#FCE7F3" },
      { name: "Sky", hex: "#DBEAFE" }
    ]
  },

  // ─── DARK / MOODY ───────────────────────────────────────────

  {
    id: "midnight-luxe",
    name: "Midnight Luxe",
    category: "Dark & Moody",
    style: "Dark Mode",
    tags: ["Dark", "Luxury", "Premium", "Night"],
    colors: [
      { name: "Onyx", hex: "#080808" },
      { name: "Obsidian", hex: "#111114" },
      { name: "Graphite", hex: "#2A2A2E" },
      { name: "Gold Accent", hex: "#D4AF37" },
      { name: "Pale Gold", hex: "#F5E6A0" }
    ]
  },
  {
    id: "deep-ocean-dark",
    name: "Deep Ocean",
    category: "Dark & Moody",
    style: "Dark Mode",
    tags: ["Dark", "Ocean", "Blue", "Deep"],
    colors: [
      { name: "Abyss", hex: "#020B18" },
      { name: "Deep Navy", hex: "#0D1F3C" },
      { name: "Cerulean", hex: "#0077B6" },
      { name: "Bioluminescent", hex: "#48CAE4" },
      { name: "Ice White", hex: "#CAF0F8" }
    ]
  },
  {
    id: "gothic-noir",
    name: "Gothic Noir",
    category: "Dark & Moody",
    style: "Dark & Dramatic",
    tags: ["Dark", "Gothic", "Dramatic", "Moody"],
    colors: [
      { name: "Black", hex: "#0A0008" },
      { name: "Plum Shadow", hex: "#1A0522" },
      { name: "Amethyst", hex: "#7B2D8B" },
      { name: "Dusty Rose", hex: "#C084A0" },
      { name: "Bone", hex: "#F0EAE2" }
    ]
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    category: "Dark & Moody",
    style: "Futuristic",
    tags: ["Cyberpunk", "Neon", "Dark", "Futuristic"],
    colors: [
      { name: "Circuit Black", hex: "#040814" },
      { name: "Steel Panel", hex: "#131A2B" },
      { name: "Neon Pink", hex: "#FF006E" },
      { name: "Cyan Glow", hex: "#00D9FF" },
      { name: "Holo Yellow", hex: "#FFE600" }
    ]
  },
  {
    id: "forest-night",
    name: "Forest Night",
    category: "Dark & Moody",
    style: "Dark & Natural",
    tags: ["Dark", "Forest", "Green", "Natural"],
    colors: [
      { name: "Night", hex: "#040D08" },
      { name: "Dark Canopy", hex: "#0D2112" },
      { name: "Emerald Shadow", hex: "#1A4D2E" },
      { name: "Biolume", hex: "#00FF88" },
      { name: "Moonbeam", hex: "#E8F5E9" }
    ]
  },

  // ─── VINTAGE / RETRO ────────────────────────────────────────

  {
    id: "70s-groove",
    name: "70s Groove",
    category: "Vintage / Retro",
    style: "Retro / Vintage",
    tags: ["70s", "Retro", "Vintage", "Warm"],
    colors: [
      { name: "Harvest Gold", hex: "#E8A838" },
      { name: "Avocado", hex: "#7A8C3A" },
      { name: "Burnt Sienna", hex: "#C25B3A" },
      { name: "Harvest Brown", hex: "#8B4513" },
      { name: "Cream", hex: "#F5E6C8" }
    ]
  },
  {
    id: "80s-synth",
    name: "80s Synthwave",
    category: "Vintage / Retro",
    style: "Retro / Vintage",
    tags: ["80s", "Synthwave", "Neon", "Retro"],
    colors: [
      { name: "Deep Space", hex: "#0D0019" },
      { name: "Hot Magenta", hex: "#FF0099" },
      { name: "Electric Purple", hex: "#8800FF" },
      { name: "Cyan Neon", hex: "#00FFFF" },
      { name: "Grid Pink", hex: "#FF69B4" }
    ]
  },
  {
    id: "90s-vaporwave",
    name: "90s Vaporwave",
    category: "Vintage / Retro",
    style: "Retro / Vintage",
    tags: ["90s", "Vaporwave", "Pastel", "Retro"],
    colors: [
      { name: "Violet Dream", hex: "#2E1760" },
      { name: "Hot Pink", hex: "#FF71CE" },
      { name: "Aqua Blue", hex: "#01CDFE" },
      { name: "Mint Vape", hex: "#05FFA1" },
      { name: "Yellow Tape", hex: "#FFFB96" }
    ]
  },
  {
    id: "vintage-print",
    name: "Vintage Print",
    category: "Vintage / Retro",
    style: "Vintage",
    tags: ["Vintage", "Print", "Aged", "Sepia"],
    colors: [
      { name: "Aged Paper", hex: "#F4E8C1" },
      { name: "Sepia", hex: "#D4A853" },
      { name: "Faded Red", hex: "#A63D2F" },
      { name: "Dusty Teal", hex: "#5B8A7A" },
      { name: "Ink Black", hex: "#2A1A0A" }
    ]
  },
  {
    id: "art-deco",
    name: "Art Deco",
    category: "Vintage / Retro",
    style: "Art Deco",
    tags: ["Art Deco", "1920s", "Luxury", "Gold"],
    colors: [
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Gold", hex: "#CFB53B" },
      { name: "Deep Teal", hex: "#003B46" },
      { name: "Burgundy", hex: "#800020" },
      { name: "Ebony", hex: "#100C08" }
    ]
  },

  // ─── BRAND / LOGO PALETTES ──────────────────────────────────

  {
    id: "startup-fresh",
    name: "Startup Fresh",
    category: "Branding",
    style: "Modern Brand",
    tags: ["Startup", "Brand", "Tech", "Modern"],
    colors: [
      { name: "Clean White", hex: "#FAFAFA" },
      { name: "Light Gray", hex: "#F0F0F0" },
      { name: "Brand Blue", hex: "#4F46E5" },
      { name: "Brand Dark", hex: "#312E81" },
      { name: "Text Black", hex: "#111827" }
    ]
  },
  {
    id: "luxury-brand",
    name: "Luxury Brand",
    category: "Branding",
    style: "Luxury",
    tags: ["Luxury", "Premium", "Gold", "Fashion"],
    colors: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Warm Cream", hex: "#F8F0E3" },
      { name: "Champagne", hex: "#C9A84C" },
      { name: "Deep Gold", hex: "#8B6914" },
      { name: "Noir", hex: "#0A0A0A" }
    ]
  },
  {
    id: "eco-brand",
    name: "Eco Brand",
    category: "Branding",
    style: "Sustainable",
    tags: ["Eco", "Green", "Sustainable", "Natural"],
    colors: [
      { name: "Natural White", hex: "#F7F5F0" },
      { name: "Hemp", hex: "#C9B99A" },
      { name: "Sage", hex: "#7C9B70" },
      { name: "Forest", hex: "#2D5016" },
      { name: "Earth", hex: "#1A0F00" }
    ]
  },
  {
    id: "fintech-trust",
    name: "Fintech Trust",
    category: "Branding",
    style: "Professional",
    tags: ["Fintech", "Finance", "Trust", "Blue"],
    colors: [
      { name: "Cloud White", hex: "#F8FAFF" },
      { name: "Light Navy", hex: "#E8EEFF" },
      { name: "Trust Blue", hex: "#1A4FBA" },
      { name: "Deep Navy", hex: "#0D2B6B" },
      { name: "Dark Ink", hex: "#070E24" }
    ]
  },
  {
    id: "health-wellness",
    name: "Health & Wellness",
    category: "Branding",
    style: "Wellness",
    tags: ["Health", "Wellness", "Calm", "Green", "Mint"],
    colors: [
      { name: "Pure Mint", hex: "#F0FFF4" },
      { name: "Soft Green", hex: "#BBF7D0" },
      { name: "Vitality", hex: "#22C55E" },
      { name: "Deep Health", hex: "#15803D" },
      { name: "Forest Depth", hex: "#14532D" }
    ]
  },

  // ─── GRADIENTS ──────────────────────────────────────────────

  {
    id: "sunset-gradient",
    name: "Sunset Gradient",
    category: "Gradient",
    style: "Gradient",
    tags: ["Gradient", "Warm", "Sunset", "Vibrant"],
    colors: [
      { name: "Sky Yellow", hex: "#FEF08A" },
      { name: "Peach", hex: "#FCA5A5" },
      { name: "Coral", hex: "#F97316" },
      { name: "Deep Orange", hex: "#EA580C" },
      { name: "Night Purple", hex: "#7C3AED" }
    ]
  },
  {
    id: "ocean-gradient",
    name: "Ocean Gradient",
    category: "Gradient",
    style: "Gradient",
    tags: ["Gradient", "Ocean", "Blue", "Cool"],
    colors: [
      { name: "Sky Pale", hex: "#EFF6FF" },
      { name: "Sky Blue", hex: "#93C5FD" },
      { name: "Ocean", hex: "#3B82F6" },
      { name: "Deep Ocean", hex: "#1D4ED8" },
      { name: "Abyss", hex: "#1E3A8A" }
    ]
  },
  {
    id: "northern-lights-grad",
    name: "Northern Lights",
    category: "Gradient",
    style: "Gradient",
    tags: ["Gradient", "Aurora", "Dark", "Vibrant"],
    colors: [
      { name: "Ink Black", hex: "#060918" },
      { name: "Deep Indigo", hex: "#312E81" },
      { name: "Violet", hex: "#7C3AED" },
      { name: "Aurora", hex: "#06B6D4" },
      { name: "Green Glow", hex: "#10B981" }
    ]
  },
  {
    id: "rose-gold-gradient",
    name: "Rose Gold",
    category: "Gradient",
    style: "Gradient",
    tags: ["Gradient", "Rose Gold", "Luxury", "Feminine"],
    colors: [
      { name: "Blush Start", hex: "#FFF0F0" },
      { name: "Rose", hex: "#FFB5C8" },
      { name: "Rose Gold", hex: "#E8956D" },
      { name: "Warm Gold", hex: "#D4A847" },
      { name: "Deep Bronze", hex: "#6B4226" }
    ]
  },

  // ─── ACCESSIBLE / WCAG ──────────────────────────────────────

  {
    id: "accessible-blue",
    name: "Accessible Blue",
    category: "Accessible",
    style: "WCAG Compliant",
    tags: ["Accessible", "WCAG", "AA", "AAA"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Light Blue", hex: "#DBEAFE" },
      { name: "Blue AAA", hex: "#1D4ED8" },
      { name: "Blue Dark", hex: "#1E3A8A" },
      { name: "Black", hex: "#000000" }
    ]
  },
  {
    id: "accessible-green",
    name: "Accessible Green",
    category: "Accessible",
    style: "WCAG Compliant",
    tags: ["Accessible", "WCAG", "AA", "Green"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Light Green", hex: "#DCFCE7" },
      { name: "Green AA", hex: "#16A34A" },
      { name: "Green Dark", hex: "#14532D" },
      { name: "Black", hex: "#000000" }
    ]
  },
  {
    id: "high-contrast",
    name: "High Contrast",
    category: "Accessible",
    style: "High Contrast",
    tags: ["Accessible", "High Contrast", "AAA", "Inclusive"],
    colors: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Light Surface", hex: "#F3F4F6" },
      { name: "Strong Blue", hex: "#1D4ED8" },
      { name: "Charcoal", hex: "#1F2937" },
      { name: "True Black", hex: "#000000" }
    ]
  },

  // ─── SEASONAL ───────────────────────────────────────────────

  {
    id: "winter-solstice",
    name: "Winter Solstice",
    category: "Seasonal",
    style: "Cool & Minimal",
    tags: ["Winter", "Cool", "Blue", "Icy"],
    colors: [
      { name: "Snowfall", hex: "#F0F8FF" },
      { name: "Ice Crystal", hex: "#B8D4E8" },
      { name: "Frost Blue", hex: "#5B9BD5" },
      { name: "Arctic", hex: "#2E5F8A" },
      { name: "Tundra Dark", hex: "#0D1B2A" }
    ]
  },
  {
    id: "spring-garden",
    name: "Spring Garden",
    category: "Seasonal",
    style: "Soft & Pastel",
    tags: ["Spring", "Fresh", "Pastel", "Floral"],
    colors: [
      { name: "Garden White", hex: "#F8FFF4" },
      { name: "Lily", hex: "#FFF0CD" },
      { name: "Bluebell", hex: "#AEC6CF" },
      { name: "Fern Leaf", hex: "#5C8A4A" },
      { name: "Bark", hex: "#4A3728" }
    ]
  },
  {
    id: "summer-solstice",
    name: "Summer Solstice",
    category: "Seasonal",
    style: "Bold & Vibrant",
    tags: ["Summer", "Hot", "Vibrant", "Warm"],
    colors: [
      { name: "Sunlight", hex: "#FFFDE7" },
      { name: "Sunflower", hex: "#FDD835" },
      { name: "Coral Reef", hex: "#FF5252" },
      { name: "Turquoise", hex: "#1DE9B6" },
      { name: "Deep Dusk", hex: "#1A237E" }
    ]
  },
  {
    id: "autumn-leaves",
    name: "Autumn Leaves",
    category: "Seasonal",
    style: "Warm & Earthy",
    tags: ["Autumn", "Warm", "Fall", "Cozy"],
    colors: [
      { name: "Morning Cream", hex: "#FFF8F0" },
      { name: "Pumpkin", hex: "#FF7043" },
      { name: "Maple", hex: "#BF360C" },
      { name: "Walnut", hex: "#5D4037" },
      { name: "Forest Floor", hex: "#1B1409" }
    ]
  },

  // ─── GENDER-INCLUSIVE / PRIDE ────────────────────────────────

  {
    id: "rainbow-pride",
    name: "Rainbow Pride",
    category: "Pride / Inclusive",
    style: "Rainbow",
    tags: ["Pride", "Rainbow", "Inclusive", "Colorful"],
    colors: [
      { name: "Red", hex: "#E40303" },
      { name: "Orange", hex: "#FF8C00" },
      { name: "Yellow", hex: "#FFED00" },
      { name: "Green", hex: "#008026" },
      { name: "Indigo", hex: "#004DFF" }
    ]
  },
  {
    id: "trans-colors",
    name: "Trans Flag Palette",
    category: "Pride / Inclusive",
    style: "Flag",
    tags: ["Pride", "Trans", "Inclusive"],
    colors: [
      { name: "Blue", hex: "#55CDFC" },
      { name: "Pink", hex: "#F7A8B8" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Pink Alt", hex: "#F7A8B8" },
      { name: "Blue Alt", hex: "#55CDFC" }
    ]
  },
  {
    id: "bi-palette",
    name: "Bisexual Flag Palette",
    category: "Pride / Inclusive",
    style: "Flag",
    tags: ["Pride", "Bisexual", "Inclusive"],
    colors: [
      { name: "Magenta", hex: "#D60270" },
      { name: "Medium Pink", hex: "#C67BB8" },
      { name: "Purple Mid", hex: "#9B4F96" },
      { name: "Royal Blue", hex: "#0038A8" },
      { name: "Deep Blue", hex: "#002070" }
    ]
  },

  // ─── NATIONAL FLAGS ─────────────────────────────────────────

  {
    id: "india-tricolor",
    name: "India Tricolor",
    category: "Flags",
    style: "National Flag",
    tags: ["India", "Flag", "National", "Saffron"],
    colors: [
      { name: "Saffron", hex: "#FF9933" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Ashoka Blue", hex: "#000080" },
      { name: "India Green", hex: "#138808" },
      { name: "Deep Saffron", hex: "#FF671F" }
    ]
  },
  {
    id: "usa-patriot",
    name: "USA Patriotic",
    category: "Flags",
    style: "National Flag",
    tags: ["USA", "Flag", "National", "Patriotic"],
    colors: [
      { name: "Old Glory Red", hex: "#B22234" },
      { name: "Flag White", hex: "#FFFFFF" },
      { name: "Old Glory Blue", hex: "#3C3B6E" },
      { name: "Deep Red", hex: "#8B0000" },
      { name: "Navy", hex: "#002868" }
    ]
  },
  {
    id: "japan-rising",
    name: "Japan Rising Sun",
    category: "Flags",
    style: "National Flag",
    tags: ["Japan", "Flag", "National", "Minimalist"],
    colors: [
      { name: "Paper White", hex: "#FFFFFF" },
      { name: "Crimson", hex: "#BC002D" },
      { name: "Ink Black", hex: "#1A1A1A" },
      { name: "Stone", hex: "#9E9E9E" },
      { name: "Warm White", hex: "#F5F5F5" }
    ]
  },

  // ─── TYPOGRAPHY / EDITORIAL ─────────────────────────────────

  {
    id: "editorial-mono",
    name: "Editorial Mono",
    category: "Editorial",
    style: "Editorial",
    tags: ["Editorial", "Newspaper", "Typographic", "Minimal"],
    colors: [
      { name: "Newsprint", hex: "#F8F7F4" },
      { name: "Warm Off-White", hex: "#EDE8DF" },
      { name: "Mid Gray", hex: "#9A9A90" },
      { name: "Dark Ink", hex: "#1A1A16" },
      { name: "Pure Black", hex: "#030303" }
    ]
  },
  {
    id: "magazine-bold",
    name: "Magazine Bold",
    category: "Editorial",
    style: "Editorial",
    tags: ["Magazine", "Bold", "Pop", "Fashion"],
    colors: [
      { name: "Bright White", hex: "#FFFFFF" },
      { name: "Pale Gray", hex: "#EEEEEE" },
      { name: "Hot Red", hex: "#FF1744" },
      { name: "Deep Black", hex: "#212121" },
      { name: "Accent Yellow", hex: "#FFD600" }
    ]
  },

  // ─── FOOD & RESTAURANT ──────────────────────────────────────

  {
    id: "cafe-warm",
    name: "Café Warm",
    category: "Food & Beverage",
    style: "Warm & Earthy",
    tags: ["Coffee", "Cafe", "Warm", "Cozy"],
    colors: [
      { name: "Oat Latte", hex: "#F5ECD7" },
      { name: "Cappuccino", hex: "#D4A96A" },
      { name: "Espresso", hex: "#6F4E37" },
      { name: "Dark Roast", hex: "#3D2314" },
      { name: "Carbon", hex: "#1A0F08" }
    ]
  },
  {
    id: "fresh-produce",
    name: "Fresh Produce",
    category: "Food & Beverage",
    style: "Vibrant",
    tags: ["Fresh", "Food", "Colorful", "Market"],
    colors: [
      { name: "Cucumber", hex: "#D4EDDA" },
      { name: "Lime", hex: "#8BC34A" },
      { name: "Tomato", hex: "#F44336" },
      { name: "Carrot", hex: "#FF9800" },
      { name: "Eggplant", hex: "#4A148C" }
    ]
  },

  // ─── SPORTS & ENERGY ────────────────────────────────────────

  {
    id: "sport-energy",
    name: "Sports Energy",
    category: "Sports & Energy",
    style: "Bold & Vibrant",
    tags: ["Sports", "Energy", "Bold", "Dynamic"],
    colors: [
      { name: "Adrenaline", hex: "#FF3D00" },
      { name: "Speed Yellow", hex: "#FFD600" },
      { name: "Power Black", hex: "#212121" },
      { name: "Track White", hex: "#FAFAFA" },
      { name: "Steel Gray", hex: "#607D8B" }
    ]
  },
  {
    id: "neon-sport",
    name: "Neon Sport",
    category: "Sports & Energy",
    style: "Bold & Vibrant",
    tags: ["Neon", "Sport", "Gym", "High-Energy"],
    colors: [
      { name: "Jet Black", hex: "#0A0A0A" },
      { name: "Dark Base", hex: "#1A1A1A" },
      { name: "Neon Green", hex: "#39FF14" },
      { name: "Hot Orange", hex: "#FF6100" },
      { name: "Pure White", hex: "#FFFFFF" }
    ]
  },

  // ─── TECHNOLOGY / DEVELOPER ─────────────────────────────────

  {
    id: "terminal-green",
    name: "Terminal Green",
    category: "Tech / Developer",
    style: "Dark Mode",
    tags: ["Terminal", "Developer", "Hacker", "Green"],
    colors: [
      { name: "Terminal Black", hex: "#0D0208" },
      { name: "Dark Panel", hex: "#1A0F12" },
      { name: "Screen Green", hex: "#00FF41" },
      { name: "Dim Green", hex: "#00A11E" },
      { name: "Matrix Pale", hex: "#CCFFCC" }
    ]
  },
  {
    id: "github-dark",
    name: "GitHub-Inspired Dark",
    category: "Tech / Developer",
    style: "Dark Mode",
    tags: ["GitHub", "Developer", "Dark", "Code"],
    colors: [
      { name: "Canvas", hex: "#0D1117" },
      { name: "Surface", hex: "#161B22" },
      { name: "Border", hex: "#30363D" },
      { name: "Accent Blue", hex: "#58A6FF" },
      { name: "Text Primary", hex: "#C9D1D9" }
    ]
  },
  {
    id: "ai-futuristic",
    name: "AI Futuristic",
    category: "Tech / Developer",
    style: "Futuristic",
    tags: ["AI", "Futuristic", "Tech", "Clean"],
    colors: [
      { name: "Pure White", hex: "#FAFAFA" },
      { name: "Platinum", hex: "#E8E8E8" },
      { name: "AI Violet", hex: "#7C3AED" },
      { name: "Deep AI", hex: "#4C1D95" },
      { name: "Void", hex: "#09090B" }
    ]
  },

  // ─── FASHION ────────────────────────────────────────────────

  {
    id: "parisian-chic",
    name: "Parisian Chic",
    category: "Fashion",
    style: "Luxury",
    tags: ["Paris", "Fashion", "Chic", "Neutral"],
    colors: [
      { name: "Ivory", hex: "#FEFDF8" },
      { name: "Ecru", hex: "#F0E6D3" },
      { name: "Taupe", hex: "#8E7F7F" },
      { name: "Charcoal", hex: "#3D3635" },
      { name: "Black Ink", hex: "#100D0D" }
    ]
  },
  {
    id: "streetwear",
    name: "Streetwear",
    category: "Fashion",
    style: "Bold & Vibrant",
    tags: ["Street", "Urban", "Hype", "Bold"],
    colors: [
      { name: "Cement", hex: "#C4C4BF" },
      { name: "Off White", hex: "#F5F0E8" },
      { name: "Volt Yellow", hex: "#CEFF00" },
      { name: "Jet Black", hex: "#0A0A0A" },
      { name: "Deep Red", hex: "#8B0000" }
    ]
  },

  // ─── INTERIOR / HOME ────────────────────────────────────────

  {
    id: "coastal-living",
    name: "Coastal Living",
    category: "Interior / Home",
    style: "Coastal",
    tags: ["Coastal", "Interior", "Beach", "Calm"],
    colors: [
      { name: "Driftwood White", hex: "#F9F7F3" },
      { name: "Sand Dollar", hex: "#E8DFD0" },
      { name: "Sea Glass", hex: "#83B8A8" },
      { name: "Navy Anchor", hex: "#1B3A5C" },
      { name: "Rope Brown", hex: "#7A5C3C" }
    ]
  },
  {
    id: "moody-interior",
    name: "Moody Interior",
    category: "Interior / Home",
    style: "Dark & Dramatic",
    tags: ["Interior", "Moody", "Dark", "Luxury"],
    colors: [
      { name: "Chalk White", hex: "#F5F2ED" },
      { name: "Warm Stone", hex: "#C4B8A8" },
      { name: "Slate Green", hex: "#4A5A52" },
      { name: "Charcoal Wall", hex: "#2A2D2E" },
      { name: "Midnight", hex: "#0A0C0D" }
    ]
  },
  {
    id: "boho-chic",
    name: "Boho Chic",
    category: "Interior / Home",
    style: "Warm & Earthy",
    tags: ["Boho", "Interior", "Earthy", "Warm"],
    colors: [
      { name: "Linen", hex: "#F5EDD6" },
      { name: "Terracotta", hex: "#C4714A" },
      { name: "Rust", hex: "#9B4423" },
      { name: "Sage Dust", hex: "#7A8C70" },
      { name: "Bark Brown", hex: "#3E2A1E" }
    ]
  },

];

export default PALETTES;
