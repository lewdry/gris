const grid = document.getElementById('grid');
const resetBtn = document.getElementById('resetBtn');
const clearBtn = document.getElementById('clearBtn');
const shareBtn = document.getElementById('shareBtn');

const positiveWords = [
  'Able', 'Ace', 'Adore', 'Agile', 'Aid', 'Aim', 'Align', 'Alive', 'Amaze', 'Ample', 'Amuse', 'Angel', 'Apt', 'Art', 'Asset', 'Aura', 'Award', 'Aware', 'Awe',
  'Babe', 'Balm', 'Beam', 'Best', 'Big', 'Bio', 'Bliss', 'Bloom', 'Bold', 'Boost', 'Boss', 'Brave', 'Brisk', 'Build',
  'Calm', 'Care', 'Charm', 'Cheer', 'Chic', 'Chief', 'Clean', 'Cool', 'Crisp', 'Crown', 'Cupid', 'Cure', 'Cute',
  'Dance', 'Dawn', 'Day', 'Dear', 'Done', 'Dose', 'Dot', 'Dream', 'Drive',
  'Earn', 'Ease', 'Easy', 'Eco', 'Edit', 'Elite', 'Enjoy', 'Epic', 'Exact', 'Extra',
  'Fab', 'Fact', 'Fair', 'Faith', 'Fame', 'Fancy', 'Fast', 'Feast', 'Fine', 'Firm', 'Flair', 'Flash', 'Fleet', 'Flora', 'Flow', 'Fly', 'Focus', 'Fond', 'Force', 'Forge', 'Frank', 'Free', 'Fresh', 'Fun',
  'Gain', 'Game', 'Gem', 'Giddy', 'Gig', 'Glad', 'Gleam', 'Glee', 'Glide', 'Glory', 'Glow', 'Gold', 'Good', 'Grace', 'Grand', 'Grant', 'Grasp', 'Great', 'Grin', 'Grow', 'Guide', 'Guru', 'Guy',
  'Hail', 'Halo', 'Handy', 'Happy', 'Hardy', 'Haven', 'Heal', 'Heart', 'Help', 'Hero', 'Hip', 'Honey', 'Hope', 'Hot', 'Hub', 'Hug',
  'Icon', 'Idea', 'Ideal', 'Inner',
  'Jazzy', 'Jewel', 'Joke', 'Jolly', 'Joy', 'Jump', 'Just',
  'Keen', 'Keep', 'Key', 'Kin', 'Kind', 'Kite', 'Knack', 'Know',
  'Laugh', 'Lead', 'Leap', 'Learn', 'Light', 'Lit', 'Live', 'Logic', 'Love', 'Loyal', 'Lucid', 'Luck', 'Lucky',
  'Magic', 'Mate', 'Max', 'Merry', 'Mirth', 'Model', 'Moral', 'Muse', 'Music',
  'Neat', 'Nerve', 'New', 'Nice', 'Nifty', 'Noble', 'Novel', 'Now',
  'Oasis', 'Okay', 'Old', 'Open', 'Own',
  'Pace', 'Pal', 'Pax', 'Peace', 'Perk', 'Play', 'Plus', 'Pop', 'Power', 'Proud', 'Pure',
  'Quiet',
  'Raw', 'Real', 'Relax', 'Rich', 'Rise',
  'Safe', 'Sky', 'Smile', 'Spark', 'Star', 'Sun', 'Sweet',
  'Top', 'True', 'Trust', 'Try',
  'Unity',
  'Vibe', 'Vivid',
  'Warm', 'Win', 'Wise', 'Worth',
  'Yes', 'Young',
  'Zen', 'Zest', 'Zesty'
];

const font5x7 = {
  A: [0b01110,0b10001,0b10001,0b11111,0b10001,0b10001,0b10001],
  B: [0b11110,0b10001,0b10001,0b11110,0b10001,0b10001,0b11110],
  C: [0b01110,0b10001,0b10000,0b10000,0b10000,0b10001,0b01110],
  D: [0b11100,0b10010,0b10001,0b10001,0b10001,0b10010,0b11100],
  E: [0b11111,0b10000,0b10000,0b11110,0b10000,0b10000,0b11111],
  F: [0b11111,0b10000,0b10000,0b11110,0b10000,0b10000,0b10000],
  G: [0b01110,0b10001,0b10000,0b10111,0b10001,0b10001,0b01110],
  H: [0b10001,0b10001,0b10001,0b11111,0b10001,0b10001,0b10001],
  I: [0b01110,0b00100,0b00100,0b00100,0b00100,0b00100,0b01110],
  J: [0b00111,0b00010,0b00010,0b00010,0b10010,0b10010,0b01100],
  K: [0b10001,0b10010,0b10100,0b11000,0b10100,0b10010,0b10001],
  L: [0b10000,0b10000,0b10000,0b10000,0b10000,0b10000,0b11111],
  M: [0b10001,0b11011,0b10101,0b10101,0b10001,0b10001,0b10001],
  N: [0b10001,0b11001,0b10101,0b10011,0b10001,0b10001,0b10001],
  O: [0b01110,0b10001,0b10001,0b10001,0b10001,0b10001,0b01110],
  P: [0b11110,0b10001,0b10001,0b11110,0b10000,0b10000,0b10000],
  Q: [0b01110,0b10001,0b10001,0b10001,0b10101,0b10010,0b01101],
  R: [0b11110,0b10001,0b10001,0b11110,0b10100,0b10010,0b10001],
  S: [0b01111,0b10000,0b10000,0b01110,0b00001,0b00001,0b11110],
  T: [0b11111,0b00100,0b00100,0b00100,0b00100,0b00100,0b00100],
  U: [0b10001,0b10001,0b10001,0b10001,0b10001,0b10001,0b01110],
  V: [0b10001,0b10001,0b10001,0b10001,0b10001,0b01010,0b00100],
  W: [0b10001,0b10001,0b10001,0b10101,0b10101,0b11011,0b10001],
  X: [0b10001,0b10001,0b01010,0b00100,0b01010,0b10001,0b10001],
  Y: [0b10001,0b10001,0b01010,0b00100,0b00100,0b00100,0b00100],
  Z: [0b11111,0b00001,0b00010,0b00100,0b01000,0b10000,0b11111]
};

const defaultSize = { dragX: 31, dragY: 20, portraitX: 20, portraitY: 31 };
let cols = defaultSize.dragX;
let rows = defaultSize.dragY;
let pointerDown = false;
let activePointerId = null;
let lastToggledIndex = null;
let paintMode = null; // 'add' or 'remove' — set on first touch
let currentWord = null;

function getLayout() {
  const isPortrait = window.matchMedia('(orientation: portrait)').matches;
  const targetX = isPortrait ? defaultSize.portraitX : defaultSize.dragX;
  const targetY = isPortrait ? defaultSize.portraitY : defaultSize.dragY;

  // Measure available space from viewport (works before grid-wrap is sized)
  const vw = window.visualViewport ? window.visualViewport.width : window.innerWidth;
  const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;

  const cs = getComputedStyle(document.body);
  const padL = parseFloat(cs.paddingLeft) || 0;
  const padR = parseFloat(cs.paddingRight) || 0;
  const padT = parseFloat(cs.paddingTop) || 0;
  const padB = parseFloat(cs.paddingBottom) || 0;

  const header = document.querySelector('.header');
  const headerH = header ? header.getBoundingClientRect().height : 0;
  const headerMB = header ? (parseFloat(getComputedStyle(header).marginBottom) || 0) : 0;

  const border = 2; // 1px border each side of grid-wrap
  const maxAppWidth = 1000;
  const availW = Math.min(vw - padL - padR, maxAppWidth) - border;
  const availH = vh - padT - padB - headerH - headerMB - border;

  // Largest square cell that fits the target grid
  const cellSize = Math.max(1, Math.floor(Math.min(availW / targetX, availH / targetY)));

  if (cellSize >= 8) {
    return { x: targetX, y: targetY, cellSize };
  }

  // Extremely small screen: reduce grid dimensions
  const x = Math.max(12, Math.floor(availW / 8));
  const y = Math.max(12, Math.floor(availH / 8));
  return { x, y, cellSize: 8 };
}

function createCells() {
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;
  grid.style.gridTemplateRows = `repeat(${rows}, minmax(0, 1fr))`;

  for (let i = 0; i < cols * rows; i++) {
    const cell = document.createElement('button');
    cell.type = 'button';
    cell.className = 'cell';
    cell.dataset.index = i;
    cell.setAttribute('role', 'gridcell');
    cell.setAttribute('aria-pressed', 'false');
    cell.setAttribute('aria-label', `Cell ${Math.floor(i / cols) + 1} of ${cols * rows}`);
    cell.addEventListener('pointerdown', onCellPointerDown);
    cell.addEventListener('pointerenter', onCellEnter);
    cell.addEventListener('keydown', onCellKeyDown);
    grid.appendChild(cell);
  }

  grid.addEventListener('pointermove', onGridPointerMove);
  grid.addEventListener('pointerup', onPointerUp);
  grid.addEventListener('pointercancel', onPointerUp);
}

function updateStatus() {
  // status text removed by request
}

function setCellActive(x, y, active = true) {
  if (x < 0 || x >= cols || y < 0 || y >= rows) return;
  const idx = y * cols + x;
  const cell = grid.children[idx];
  if (!cell) return;
  cell.classList.toggle('active', active);
}

function clearGrid() {
  [...grid.children].forEach(cell => {
    cell.classList.remove('active');
    cell.setAttribute('aria-pressed', 'false');
  });
}

function randomWord() {
  const i = Math.floor(Math.random() * positiveWords.length);
  return positiveWords[i];
}

function paintWord(word) {
  if (!word) return;
  const upper = word.toUpperCase();
  const chars = upper.split('');
  const glyphWidth = 5;
  const glyphHeight = 7;
  const spacing = 1;
  const totalWidth = chars.length * (glyphWidth + spacing) - spacing;

  const isPortrait = rows > cols;
  const logicalCols = isPortrait ? rows : cols;
  const logicalRows = isPortrait ? cols : rows;
  const offsetX = Math.max(0, Math.floor((logicalCols - totalWidth) / 2));
  const offsetY = Math.max(0, Math.floor((logicalRows - glyphHeight) / 2));

  clearGrid();

  chars.forEach((char, charIndex) => {
    const glyph = font5x7[char] || [];
    for (let row = 0; row < glyphHeight; row++) {
      const rowBits = glyph[row] || 0;
      for (let col = 0; col < glyphWidth; col++) {
        const bit = (rowBits >> (glyphWidth - 1 - col)) & 1;
        if (bit !== 1) continue;

        const logX = offsetX + charIndex * (glyphWidth + spacing) + col;
        const logY = offsetY + row;

        if (isPortrait) {
          const actualX = logY;
          const actualY = (logicalCols - 1) - logX;
          setCellActive(actualX, actualY, true);
        } else {
          setCellActive(logX, logY, true);
        }
      }
    }
  });

}

function buildGrid() {
  const layout = getLayout();
  cols = layout.x;
  rows = layout.y;

  // Set explicit dimensions for square cells
  const wrapper = document.querySelector('.grid-wrap');
  if (wrapper) {
    const border = 2; // 1px border each side
    wrapper.style.width = (layout.cellSize * cols + border) + 'px';
    wrapper.style.height = (layout.cellSize * rows + border) + 'px';
  }

  createCells();
  if (!currentWord) {
    currentWord = randomWord();
  }
  paintWord(currentWord);
}

function resetGrid() {
  currentWord = randomWord();
  paintWord(currentWord);
}

function handleClear() {
  clearGrid();
}

function onCellPointerDown(e) {
  const cell = e.currentTarget;
  const index = Number(cell.dataset.index);
  const wasActive = cell.classList.contains('active');

  // First touch sets the mode for the entire drag
  paintMode = wasActive ? 'remove' : 'add';

  cell.classList.toggle('active', paintMode === 'add');
  cell.setAttribute('aria-pressed', String(paintMode === 'add'));

  pointerDown = true;
  activePointerId = e.pointerId;
  lastToggledIndex = index;

  if (cell.setPointerCapture) {
    cell.setPointerCapture(e.pointerId);
  }
}

function onCellEnter(e) {
  if (!pointerDown || !paintMode) return;

  const cell = e.currentTarget;
  const index = Number(cell.dataset.index);
  if (!Number.isFinite(index) || index === lastToggledIndex) return;

  cell.classList.toggle('active', paintMode === 'add');
  cell.setAttribute('aria-pressed', String(paintMode === 'add'));
  lastToggledIndex = index;
}

function onGridPointerMove(e) {
  if (!pointerDown || !paintMode || e.pointerId !== activePointerId) return;

  const cell = document.elementFromPoint(e.clientX, e.clientY)?.closest('.cell');
  if (!(cell instanceof HTMLElement)) return;

  const index = Number(cell.dataset.index);
  if (!Number.isFinite(index) || index === lastToggledIndex) return;

  cell.classList.toggle('active', paintMode === 'add');
  cell.setAttribute('aria-pressed', String(paintMode === 'add'));
  lastToggledIndex = index;
}

function onPointerUp(e) {
  if (e.pointerId !== activePointerId) return;

  pointerDown = false;
  activePointerId = null;
  lastToggledIndex = null;
  paintMode = null;

  const el = document.elementFromPoint(e.clientX, e.clientY);
  if (el && el.releasePointerCapture && e.pointerId != null) {
    try { el.releasePointerCapture(e.pointerId); } catch (_) {}
  }
}

function onCellKeyDown(e) {
  const cell = e.currentTarget;
  const index = Number(cell.dataset.index);
  const x = index % cols;
  const y = Math.floor(index / cols);

  switch (e.key) {
    case 'Enter':
    case ' ': {
      e.preventDefault();
      const isActive = cell.classList.toggle('active');
      cell.setAttribute('aria-pressed', String(isActive));
      break;
    }
    case 'ArrowRight':
      e.preventDefault();
      focusCell(x + 1, y);
      break;
    case 'ArrowLeft':
      e.preventDefault();
      focusCell(x - 1, y);
      break;
    case 'ArrowDown':
      e.preventDefault();
      focusCell(x, y + 1);
      break;
    case 'ArrowUp':
      e.preventDefault();
      focusCell(x, y - 1);
      break;
    default:
      break;
  }
}

function focusCell(x, y) {
  if (x < 0 || x >= cols || y < 0 || y >= rows) return;
  const idx = y * cols + x;
  const nextCell = grid.children[idx];
  if (nextCell instanceof HTMLElement) {
    nextCell.focus();
  }
}

window.addEventListener('pointerup', () => {
  pointerDown = false;
  activePointerId = null;
  lastToggledIndex = null;
  paintMode = null;
});

let resizeTimer = null;
function onViewportChange() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(buildGrid, 150);
}

window.addEventListener('resize', onViewportChange);

// iOS Safari: rebuild when URL bar appears/disappears
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', onViewportChange);
}

resetBtn.addEventListener('click', resetGrid);
clearBtn.addEventListener('click', handleClear);
shareBtn.addEventListener('click', handleShare);

// --- Share: render grid to PNG and invoke Web Share API ---

function gridToCanvas() {
  const scale = 2; // retina-quality export
  const cellPx = Math.max(8, Math.round(
    (document.querySelector('.grid-wrap')?.offsetWidth || cols * 16) / cols
  ));
  const w = cols * cellPx * scale;
  const h = rows * cellPx * scale;

  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  // Read themed colours from CSS custom properties
  const style = getComputedStyle(document.documentElement);
  const bgColour = '#ffffff';
  const lineColour = style.getPropertyValue('--line').trim() || '#c8c7c3';
  const blockColour = style.getPropertyValue('--block').trim() || '#565349';

  // Fill background
  ctx.fillStyle = bgColour;
  ctx.fillRect(0, 0, w, h);

  const children = grid.children;
  for (let i = 0; i < children.length; i++) {
    const cell = children[i];
    const cx = (i % cols) * cellPx * scale;
    const cy = Math.floor(i / cols) * cellPx * scale;
    const s = cellPx * scale;

    if (cell.classList.contains('active')) {
      ctx.fillStyle = blockColour;
      ctx.fillRect(cx, cy, s, s);
    }

    // Grid lines
    ctx.strokeStyle = lineColour;
    ctx.lineWidth = scale;
    ctx.strokeRect(cx, cy, s, s);
  }

  return canvas;
}

async function handleShare() {
  const canvas = gridToCanvas();

  // Convert canvas to Blob
  const blob = await new Promise(resolve =>
    canvas.toBlob(resolve, 'image/png')
  );

  const file = new File([blob], 'griddle.png', { type: 'image/png' });

  // Try Web Share API (mobile Safari, Chrome Android, etc.)
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title: 'My Griddle drawing',
        files: [file]
      });
      return;
    } catch (err) {
      if (err.name === 'AbortError') return; // user cancelled
    }
  }

  // Fallback: download the PNG directly
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'griddle.png';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

buildGrid();
