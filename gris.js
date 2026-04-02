const grid = document.getElementById('grid');
const resetBtn = document.getElementById('resetBtn');

const positiveWords = [
  'Ace','Awe','Bio','Day','Dot','Eco','Fly','Fun','Gem','Gig','Glee','Guy','Hip','Hot','Hub','Hug','Joy','Key','Kin','Lit','Luv','Max','New','Now','Old','Own','Pal','Pax','Pop','Raw','Sky','Sun','Top','Try','Win','Yes','Zen',
  'Able','Aura','Babe','Beam','Best','Bold','Calm','Care','Chic','Cool','Cute','Dear','Done','Dose','Easy','Epic','Fair','Fame','Fine','Flow','Free','Glad','Glow','Gold','Good','Grin','Halo','Heal','Help','Hero','Hope','Icon','Kind','Kite','Live','Love','Luck','Nice','Pure','Real','Rich','Rise','Safe','Star','True','Vibe','Warm','Wise','Zest','Adore','Alive','Ample','Angel','Bliss','Bloom','Brave','Bright','Charm','Cheer','Clean','Dream','Elite','Enjoy','Faith','Fancy','Fresh','Grand','Great','Happy','Heart','Honey','Ideal','Jolly','Light','Lucky','Magic','Merry','Noble','Peace','Proud','Quiet','Relax','Savor','Smile','Spark','Sweet','Trust','Unity','Vivid','Worth','Young','Zesty'
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

const defaultSize = { dragX: 37, dragY: 23, portraitX: 23, portraitY: 37 };
let cols = defaultSize.dragX;
let rows = defaultSize.dragY;
let pointerDown = false;

function getLayout() {
  return window.matchMedia('(orientation: portrait)').matches
    ? { x: defaultSize.portraitX, y: defaultSize.portraitY }
    : { x: defaultSize.dragX, y: defaultSize.dragY };
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
    cell.addEventListener('pointerdown', toggleCell);
    cell.addEventListener('pointerenter', onCellEnter);
    cell.addEventListener('keydown', onCellKeyDown);
    grid.appendChild(cell);
  }
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
  createCells();
  paintWord(randomWord());
}

function resetGrid() {
  const word = randomWord();
  paintWord(word);
}

function toggleCell(e) {
  const cell = e.currentTarget;
  const isActive = cell.classList.toggle('active');
  cell.setAttribute('aria-pressed', String(isActive));
  pointerDown = true;
}

function onCellEnter(e) {
  if (!pointerDown) return;
  const cell = e.currentTarget;
  const isActive = cell.classList.toggle('active');
  cell.setAttribute('aria-pressed', String(isActive));
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
});

window.addEventListener('resize', () => {
  const layout = getLayout();
  if (layout.x !== cols || layout.y !== rows) {
    buildGrid();
  }
});

resetBtn.addEventListener('click', resetGrid);

buildGrid();
