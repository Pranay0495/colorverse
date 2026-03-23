// ============================================================
// COLORVERSE — Main App Logic
// ============================================================

import PALETTES from './palettes.js';

// ── STATE ───────────────────────────────────────────────────
let activeCategory = 'all';
let activeStyle = 'all';
let searchQuery = '';
let currentView = 'grid';
let filtered = [...PALETTES];

// ── DOM REFS ────────────────────────────────────────────────
const paletteGrid = document.getElementById('paletteGrid');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const resultsCount = document.getElementById('resultsCount');
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const toast = document.getElementById('toast');

// ── INIT ─────────────────────────────────────────────────────
function init() {
  buildStats();
  buildCategoryFilters();
  buildStyleFilters();
  buildHeroStrip();
  render();
  bindEvents();
}

// ── STATS ────────────────────────────────────────────────────
function buildStats() {
  document.getElementById('totalCount').textContent = PALETTES.length + '+';
  const cats = [...new Set(PALETTES.map(p => p.category))];
  document.getElementById('totalCategories').textContent = cats.length;
  const colors = PALETTES.reduce((sum, p) => sum + p.colors.length, 0);
  document.getElementById('totalColors').textContent = colors + '+';
}

// ── HERO STRIP ───────────────────────────────────────────────
function buildHeroStrip() {
  const strip = document.getElementById('heroStrip');
  const featured = PALETTES.slice(0, 30);
  const allColors = featured.flatMap(p => p.colors);
  allColors.forEach(c => {
    const el = document.createElement('div');
    el.className = 'hero-strip-swatch';
    el.style.background = c.hex;
    el.title = c.name + ' ' + c.hex;
    el.onclick = () => copyHex(c.hex, c.name);
    strip.appendChild(el);
  });
}

// ── CATEGORY FILTERS ─────────────────────────────────────────
function buildCategoryFilters() {
  const container = document.querySelector('#filterSection .filter-scroll');
  const cats = ['All', ...new Set(PALETTES.map(p => p.category))];
  cats.forEach(cat => {
    if (cat === 'All') return; // already in HTML
    const btn = document.createElement('button');
    btn.className = 'filter-chip';
    btn.dataset.filter = cat;
    btn.textContent = cat;
    container.appendChild(btn);
  });
  container.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.filter;
      render();
    });
  });
}

// ── STYLE FILTERS ────────────────────────────────────────────
function buildStyleFilters() {
  const container = document.querySelector('#styleFilterSection .filter-scroll');
  const styles = [...new Set(PALETTES.map(p => p.style))].sort();
  styles.forEach(style => {
    const btn = document.createElement('button');
    btn.className = 'style-chip';
    btn.dataset.style = style;
    btn.textContent = style;
    container.appendChild(btn);
  });
  container.querySelectorAll('.style-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.style-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeStyle = btn.dataset.style;
      render();
    });
  });
}

// ── FILTER + SEARCH ──────────────────────────────────────────
function getFiltered() {
  return PALETTES.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchStyle = activeStyle === 'all' || p.style === activeStyle;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.style.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.colors.some(c => c.name.toLowerCase().includes(q) || c.hex.toLowerCase().includes(q));
    return matchCat && matchStyle && matchSearch;
  });
}

// ── RENDER ───────────────────────────────────────────────────
function render() {
  filtered = getFiltered();
  paletteGrid.innerHTML = '';

  resultsCount.textContent = `${filtered.length} palette${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    noResults.classList.remove('hidden');
    return;
  }
  noResults.classList.add('hidden');

  filtered.forEach((palette, i) => {
    const card = buildCard(palette, i);
    paletteGrid.appendChild(card);
  });
}

// ── BUILD CARD ───────────────────────────────────────────────
function buildCard(palette, index) {
  const card = document.createElement('div');
  card.className = 'palette-card';
  card.style.animationDelay = Math.min(index * 0.025, 0.2) + 's';

  // Swatches
  const swatches = document.createElement('div');
  swatches.className = 'card-swatches';
  palette.colors.forEach(c => {
    const s = document.createElement('div');
    s.className = 'card-swatch';
    s.style.background = c.hex;
    const lum = getLuminance(c.hex);
    s.innerHTML = `<span class="swatch-hex" style="color:${lum > 0.4 ? '#111' : '#fff'}">${c.hex}</span>`;
    s.addEventListener('click', e => {
      e.stopPropagation();
      copyHex(c.hex, c.name);
    });
    swatches.appendChild(s);
  });

  // Body
  const body = document.createElement('div');
  body.className = 'card-body';

  const cardTop = document.createElement('div');
  cardTop.className = 'card-top';

  const info = document.createElement('div');
  info.innerHTML = `<div class="card-name">${palette.name}</div><div class="card-category">${palette.category} · ${palette.style}</div>`;

  const copyBtn = document.createElement('button');
  copyBtn.className = 'card-copy-btn';
  copyBtn.textContent = 'Copy CSS';
  copyBtn.addEventListener('click', e => {
    e.stopPropagation();
    copyCSSVars(palette);
  });

  cardTop.appendChild(info);
  cardTop.appendChild(copyBtn);

  const tags = document.createElement('div');
  tags.className = 'card-tags';
  palette.tags.slice(0, 4).forEach(t => {
    const tag = document.createElement('span');
    tag.className = 'card-tag';
    tag.textContent = t;
    tags.appendChild(tag);
  });

  body.appendChild(cardTop);
  body.appendChild(tags);
  card.appendChild(swatches);
  card.appendChild(body);

  card.addEventListener('click', () => openModal(palette));

  return card;
}

// ── MODAL ─────────────────────────────────────────────────────
function openModal(palette) {
  let activeCodeTab = 'css';

  const swatchRow = palette.colors.map(c => {
    const lum = getLuminance(c.hex);
    const textColor = lum > 0.4 ? '#111' : '#fff';
    return `<div class="modal-swatch" style="background:${c.hex}" onclick="copyHex('${c.hex}','${c.name}')">
      <div class="modal-swatch-inner">
        <span class="modal-swatch-name" style="color:${textColor}">${c.name}</span>
        <span class="modal-swatch-hex" style="color:${textColor}">${c.hex}</span>
      </div>
    </div>`;
  }).join('');

  const colorList = palette.colors.map(c => `
    <div class="modal-color-row" onclick="copyHex('${c.hex}','${c.name}')">
      <div class="modal-color-dot" style="background:${c.hex}"></div>
      <span class="modal-color-name">${c.name}</span>
      <span class="modal-color-hex">${c.hex}</span>
      <span class="modal-color-copy">copy</span>
    </div>
  `).join('');

  const codes = {
    css: generateCSS(palette),
    tailwind: generateTailwind(palette),
    scss: generateSCSS(palette),
    js: generateJS(palette)
  };

  modalContent.innerHTML = `
    <div class="modal-swatch-row">${swatchRow}</div>
    <div class="modal-body">
      <div class="modal-title">${palette.name}</div>
      <div class="modal-meta">${palette.category} · ${palette.style}</div>
      <div class="modal-color-list">${colorList}</div>
      <div class="modal-code-section">
        <div class="modal-code-tabs">
          <button class="code-tab active" data-tab="css">CSS Vars</button>
          <button class="code-tab" data-tab="tailwind">Tailwind</button>
          <button class="code-tab" data-tab="scss">SCSS</button>
          <button class="code-tab" data-tab="js">JavaScript</button>
        </div>
        <div class="modal-code-block" id="codeBlock">
          <button class="copy-code-btn" id="copyCodeBtn">Copy</button>
          <span id="codeContent">${escapeHtml(codes.css)}</span>
        </div>
      </div>
    </div>
  `;

  // Code tab switching
  modalContent.querySelectorAll('.code-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      modalContent.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCodeTab = tab.dataset.tab;
      document.getElementById('codeContent').textContent = codes[activeCodeTab];
    });
  });

  document.getElementById('copyCodeBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(codes[activeCodeTab]);
    showToast('Code copied!');
  });

  modalOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

// ── CODE GENERATORS ──────────────────────────────────────────
function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function generateCSS(palette) {
  const slug = slugify(palette.name);
  const vars = palette.colors.map(c =>
    `  --${slug}-${slugify(c.name)}: ${c.hex};`
  ).join('\n');
  return `:root {\n  /* ${palette.name} — ${palette.style} */\n${vars}\n}`;
}

function generateTailwind(palette) {
  const slug = slugify(palette.name);
  const colors = palette.colors.map((c, i) => {
    const stops = [50,200,400,600,800];
    return `      '${stops[i] || (i+1)*100}': '${c.hex}', /* ${c.name} */`;
  }).join('\n');
  return `// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        '${slug}': {\n${colors}\n        },\n      },\n    },\n  },\n};`;
}

function generateSCSS(palette) {
  const slug = slugify(palette.name);
  const vars = palette.colors.map(c =>
    `$${slug}-${slugify(c.name)}: ${c.hex}; // ${c.name}`
  ).join('\n');
  return `// ${palette.name} — ${palette.style}\n${vars}`;
}

function generateJS(palette) {
  const obj = palette.colors.reduce((acc, c) => {
    acc[slugify(c.name).replace(/-([a-z])/g, (_, l) => l.toUpperCase())] = c.hex;
    return acc;
  }, {});
  return `// ${palette.name} — ${palette.style}\nconst ${slugify(palette.name).replace(/-([a-z])/g, (_, l) => l.toUpperCase())} = ${JSON.stringify(obj, null, 2)};`;
}

// ── COPY HELPERS ─────────────────────────────────────────────
window.copyHex = function(hex, name) {
  navigator.clipboard.writeText(hex).catch(() => {});
  showToast(`Copied ${hex} — ${name}`);
};

function copyCSSVars(palette) {
  navigator.clipboard.writeText(generateCSS(palette)).catch(() => {});
  showToast(`CSS vars copied for ${palette.name}!`);
}

// ── TOAST ─────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
}

// ── UTILS ─────────────────────────────────────────────────────
function getLuminance(hex) {
  const r = parseInt(hex.slice(1,3),16)/255;
  const g = parseInt(hex.slice(3,5),16)/255;
  const b = parseInt(hex.slice(5,7),16)/255;
  return 0.2126*r + 0.7152*g + 0.0722*b;
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ── EVENTS ───────────────────────────────────────────────────
function bindEvents() {
  // Search
  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    render();
  });

  // ⌘K / Ctrl+K focus search
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    if (e.key === 'Escape') closeModal();
  });

  // Modal close
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
  });

  // View toggle
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentView = btn.dataset.view;
      paletteGrid.className = 'palette-grid' + (currentView === 'list' ? ' list-view' : '');
    });
  });
}

// ── BOOT ─────────────────────────────────────────────────────
init();
