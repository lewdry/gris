const grid = document.getElementById('grid');
const resetBtn = document.getElementById('resetBtn');
const clearBtn = document.getElementById('clearBtn');
const shareBtn = document.getElementById('shareBtn');
const undoBtn = document.getElementById('undoBtn');

const positiveWords = [
  'Able', 'About', 'Above', 'Ace', 'Adore', 'After', 'Again', 'Agile', 'Aid', 'Aim', 'Align', 'Alive', 'All', 'Also', 'Amaze', 'Ample', 'Amuse', 'And', 'Angel', 'Any', 'Apple', 'Apt', 'Are', 'Area', 'Arm', 'Art', 'Ask', 'Asset', 'Ate', 'Aura', 'Award', 'Aware', 'Away', 'Awe',
  'Babe', 'Baby', 'Back', 'Ball', 'Balm', 'Base', 'Beam', 'Bear', 'Been', 'Began', 'Begin', 'Bell', 'Best', 'Big', 'Bio', 'Bird', 'Black', 'Bliss', 'Bloom', 'Blue', 'Boat', 'Body', 'Bold', 'Book', 'Boost', 'Boss', 'Both', 'Box', 'Boy', 'Brave', 'Bring', 'Brisk', 'Brown', 'Build', 'But', 'Buy',
  'Call', 'Calm', 'Came', 'Can', 'Car', 'Care', 'Carry', 'Catch', 'Cause', 'Cent', 'Chair', 'Charm', 'Cheer', 'Chic', 'Chief', 'Clean', 'Clear', 'Close', 'Cold', 'Come', 'Cool', 'Could', 'Cow', 'Crisp', 'Crown', 'Cupid', 'Cure', 'Cut', 'Cute',
  'Dad', 'Dance', 'Dark', 'Data', 'Dawn', 'Day', 'Days', 'Dear', 'Deep', 'Did', 'Does', 'Dog', 'Done', 'Door', 'Dose', 'Dot', 'Down', 'Draw', 'Dream', 'Drink', 'Drive', 'Drop', 'Dry', 'Duck',
  'Each', 'Early', 'Earn', 'Earth', 'Ease', 'Easy', 'Eat', 'Eco', 'Edit', 'Eight', 'Elite', 'End', 'Enjoy', 'Epic', 'Even', 'Ever', 'Every', 'Exact', 'Extra', 'Eyes',
  'Fab', 'Face', 'Fact', 'Fair', 'Faith', 'Fall', 'Fame', 'Fancy', 'Far', 'Farm', 'Fast', 'Feast', 'Feel', 'Fell', 'Few', 'Find', 'Fine', 'Fire', 'Firm', 'First', 'Fish', 'Five', 'Flair', 'Flash', 'Fleet', 'Flora', 'Flow', 'Fly', 'Focus', 'Fond', 'Food', 'Foot', 'For', 'Force', 'Forge', 'Form', 'Found', 'Four', 'Frank', 'Free', 'Fresh', 'From', 'Front', 'Full', 'Fun', 'Funny',
  'Gain', 'Game', 'Gave', 'Gem', 'Get', 'Giddy', 'Gig', 'Girl', 'Give', 'Glad', 'Gleam', 'Glee', 'Glide', 'Glory', 'Glow', 'Goes', 'Going', 'Gold', 'Good', 'Got', 'Grace', 'Grand', 'Grant', 'Grasp', 'Great', 'Green', 'Grey', 'Grin', 'Grow', 'Guide', 'Guru', 'Guy',
  'Had', 'Hail', 'Hair', 'Half', 'Halo', 'Hand', 'Handy', 'Happy', 'Hard', 'Hardy', 'Has', 'Have', 'Haven', 'Head', 'Heal', 'Hear', 'Heard', 'Heart', 'Heavy', 'Help', 'Her', 'Here', 'Hero', 'High', 'Him', 'Hip', 'His', 'Hold', 'Home', 'Honey', 'Hope', 'Horse', 'Hot', 'House', 'How', 'Hub', 'Hug', 'Hurt',
  'Icon', 'Idea', 'Ideal', 'Inner', 'Into', 'Iron',
  'Jazzy', 'Jewel', 'Joke', 'Jolly', 'Joy', 'Jump', 'Just',
  'Keen', 'Keep', 'Kept', 'Key', 'Kin', 'Kind', 'Kite', 'Knack', 'Knew', 'Know',
  'Land', 'Large', 'Last', 'Late', 'Laugh', 'Lead', 'Leap', 'Learn', 'Leave', 'Left', 'Less', 'Let', 'Life', 'Light', 'Like', 'Line', 'List', 'Lit', 'Live', 'Logic', 'Long', 'Look', 'Lost', 'Lot', 'Love', 'Low', 'Loyal', 'Lucid', 'Luck', 'Lucky',
  'Made', 'Magic', 'Make', 'Man', 'Many', 'Mark', 'Mate', 'Maths', 'Max', 'May', 'Mean', 'Men', 'Merry', 'Might', 'Mile', 'Mind', 'Mirth', 'Miss', 'Model', 'Money', 'Moon', 'Moral', 'More', 'Most', 'Move', 'Much', 'Mum', 'Muse', 'Music', 'Must',
  'Name', 'Near', 'Neat', 'Need', 'Nerve', 'Never', 'New', 'Next', 'Nice', 'Nifty', 'Night', 'Noble', 'Non', 'Not', 'Note', 'Novel', 'Now',
  'Oasis', 'Off', 'Often', 'Okay', 'Old', 'Once', 'One', 'Only', 'Open', 'Order', 'Other', 'Our', 'Out', 'Over', 'Own',
  'Pace', 'Page', 'Pal', 'Paper', 'Part', 'Party', 'Pass', 'Past', 'Pax', 'Peace', 'Perk', 'Pick', 'Piece', 'Place', 'Plant', 'Play', 'Plus', 'Point', 'Poor', 'Pop', 'Power', 'Press', 'Proud', 'Pull', 'Pure', 'Push', 'Put',
  'Quick', 'Quiet', 'Quite',
  'Rain', 'Ran', 'Raw', 'Read', 'Real', 'Red', 'Relax', 'Rest', 'Rich', 'Ride', 'Right', 'Rise', 'River', 'Road', 'Room', 'Round', 'Run',
  'Safe', 'Said', 'Same', 'Saw', 'Say', 'Says', 'Sea', 'See', 'Seen', 'Seven', 'Shall', 'Shape', 'She', 'Sheep', 'Shell', 'Shoe', 'Short', 'Show', 'Shown', 'Side', 'Sing', 'Sit', 'Six', 'Sky', 'Sleep', 'Small', 'Smart', 'Smell', 'Smile', 'Snow', 'Some', 'Song', 'Soon', 'Sound', 'Spark', 'Spell', 'Spelt', 'Stand', 'Star', 'Start', 'State', 'Stay', 'Step', 'Still', 'Stood', 'Stop', 'Story', 'Study', 'Such', 'Sun', 'Sure', 'Sweet',
  'Take', 'Talk', 'Tall', 'Tell', 'Ten', 'Test', 'Them', 'Then', 'There', 'These', 'They', 'Thing', 'Think', 'Third', 'This', 'Those', 'Three', 'Time', 'Today', 'Told', 'Took', 'Top', 'Town', 'Tree', 'True', 'Trust', 'Try', 'Turn', 'Two',
  'Under', 'Unity', 'Until', 'Upon', 'Use', 'Used',
  'Very', 'Vibe', 'Vivid', 'Voice',
  'Walk', 'Wall', 'Want', 'Warm', 'Wash', 'Watch', 'Water', 'Way', 'Well', 'Went', 'Were', 'What', 'When', 'Where', 'Which', 'While', 'White', 'Who', 'Whole', 'Why', 'Will', 'Win', 'Wind', 'Wise', 'Wish', 'With', 'Wood', 'Word', 'Work', 'World', 'Worth', 'Would', 'Write', 'Wrong',
  'Year', 'Years', 'Yes', 'You', 'Young', 'Your', 'Yours',
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
let pendingDragStartState = null;

const HISTORY_LIMIT = 50;
const undoStack = [];
const redoStack = [];

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
  grid.setAttribute('aria-rowcount', String(rows));
  grid.setAttribute('aria-colcount', String(cols));

  for (let i = 0; i < cols * rows; i++) {
    const row = Math.floor(i / cols) + 1;
    const col = (i % cols) + 1;
    const cell = document.createElement('button');
    cell.type = 'button';
    cell.className = 'cell';
    cell.dataset.index = i;
    cell.setAttribute('role', 'gridcell');
    cell.setAttribute('aria-rowindex', String(row));
    cell.setAttribute('aria-colindex', String(col));
    cell.setAttribute('aria-pressed', 'false');
    cell.setAttribute('aria-label', `Row ${row}, Column ${col}`);
    cell.addEventListener('pointerdown', onCellPointerDown);
    cell.addEventListener('pointerenter', onCellEnter);
    cell.addEventListener('keydown', onCellKeyDown);
    grid.appendChild(cell);
  }
}

function updateStatus() {
  // status text removed by request
}

function isPortraitLayout(layoutCols, layoutRows) {
  return layoutRows > layoutCols;
}

function getLogicalDimensions(layoutCols, layoutRows) {
  if (isPortraitLayout(layoutCols, layoutRows)) {
    return { logicalCols: layoutRows, logicalRows: layoutCols };
  }
  return { logicalCols: layoutCols, logicalRows: layoutRows };
}

function actualToLogical(x, y, layoutCols, layoutRows) {
  if (!isPortraitLayout(layoutCols, layoutRows)) {
    return { x, y };
  }

  return {
    x: layoutRows - 1 - y,
    y: x
  };
}

function logicalToActual(logicalX, logicalY, layoutCols, layoutRows) {
  if (!isPortraitLayout(layoutCols, layoutRows)) {
    return { x: logicalX, y: logicalY };
  }

  return {
    x: logicalY,
    y: layoutRows - 1 - logicalX
  };
}

function getGridState() {
  const activeIndices = [];
  const children = grid.children;
  for (let i = 0; i < children.length; i++) {
    if (children[i].classList.contains('active')) {
      activeIndices.push(i);
    }
  }

  return {
    cols,
    rows,
    activeIndices
  };
}

function statesEqual(a, b) {
  if (!a || !b) return false;
  if (a.cols !== b.cols || a.rows !== b.rows) return false;
  if (a.activeIndices.length !== b.activeIndices.length) return false;

  for (let i = 0; i < a.activeIndices.length; i++) {
    if (a.activeIndices[i] !== b.activeIndices[i]) {
      return false;
    }
  }

  return true;
}

function cloneState(state) {
  return {
    cols: state.cols,
    rows: state.rows,
    activeIndices: [...state.activeIndices]
  };
}

function trimHistory(stack) {
  while (stack.length > HISTORY_LIMIT) {
    stack.shift();
  }
}

function updateHistoryButtons() {
  if (undoBtn) undoBtn.disabled = undoStack.length === 0;
}

function applyState(state) {
  clearGrid();
  const sourceLogical = getLogicalDimensions(state.cols, state.rows);
  const targetLogical = getLogicalDimensions(cols, rows);
  const offsetX = Math.floor((targetLogical.logicalCols - sourceLogical.logicalCols) / 2);
  const offsetY = Math.floor((targetLogical.logicalRows - sourceLogical.logicalRows) / 2);

  for (const idx of state.activeIndices) {
    const sourceX = idx % state.cols;
    const sourceY = Math.floor(idx / state.cols);
    const logicalPoint = actualToLogical(sourceX, sourceY, state.cols, state.rows);
    const mappedLogicalX = logicalPoint.x + offsetX;
    const mappedLogicalY = logicalPoint.y + offsetY;

    if (
      mappedLogicalX < 0 ||
      mappedLogicalX >= targetLogical.logicalCols ||
      mappedLogicalY < 0 ||
      mappedLogicalY >= targetLogical.logicalRows
    ) {
      continue;
    }

    const mappedPoint = logicalToActual(mappedLogicalX, mappedLogicalY, cols, rows);
    setCellActive(mappedPoint.x, mappedPoint.y, true);
  }
}

function pushUndoState(beforeState) {
  const currentState = getGridState();
  if (statesEqual(beforeState, currentState)) {
    return;
  }

  undoStack.push(cloneState(beforeState));
  trimHistory(undoStack);
  redoStack.length = 0;
  updateHistoryButtons();
}

function undo() {
  if (undoStack.length === 0) return;

  const currentState = getGridState();
  const prevState = undoStack.pop();
  redoStack.push(cloneState(currentState));
  trimHistory(redoStack);
  applyState(prevState);
  updateHistoryButtons();
}

function redo() {
  if (redoStack.length === 0) return;

  const currentState = getGridState();
  const nextState = redoStack.pop();
  undoStack.push(cloneState(currentState));
  trimHistory(undoStack);
  applyState(nextState);
  updateHistoryButtons();
}

function setCellActive(x, y, active = true) {
  if (x < 0 || x >= cols || y < 0 || y >= rows) return;
  const idx = y * cols + x;
  const cell = grid.children[idx];
  if (!cell) return;
  cell.classList.toggle('active', active);
  cell.setAttribute('aria-pressed', String(active));
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
  const offsetY = Math.max(0, Math.floor((logicalRows - glyphHeight) / 2 - 3));

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
  const previousState = grid.children.length > 0 ? getGridState() : null;
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
  if (previousState) {
    applyState(previousState);
    updateHistoryButtons();
    return;
  }

  if (!currentWord) {
    currentWord = randomWord();
  }
  paintWord(currentWord);
  updateHistoryButtons();
}

function resetGrid() {
  const beforeState = getGridState();
  currentWord = randomWord();
  paintWord(currentWord);
  pushUndoState(beforeState);
}

function handleClear() {
  const beforeState = getGridState();
  clearGrid();
  pushUndoState(beforeState);
}

function onCellPointerDown(e) {
  pendingDragStartState = getGridState();

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

  if (pendingDragStartState) {
    pushUndoState(pendingDragStartState);
    pendingDragStartState = null;
  }

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
      const beforeState = getGridState();
      const isActive = cell.classList.toggle('active');
      cell.setAttribute('aria-pressed', String(isActive));
      pushUndoState(beforeState);
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

function onWindowKeyDown(e) {
  const key = e.key.toLowerCase();
  const modifier = e.metaKey || e.ctrlKey;
  if (!modifier || key !== 'z') return;

  e.preventDefault();
  if (e.shiftKey) {
    redo();
  } else {
    undo();
  }
}

window.addEventListener('pointerup', () => {
  pendingDragStartState = null;
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
if (undoBtn) undoBtn.addEventListener('click', undo);
window.addEventListener('keydown', onWindowKeyDown);
grid.addEventListener('pointermove', onGridPointerMove);
grid.addEventListener('pointerup', onPointerUp);
grid.addEventListener('pointercancel', onPointerUp);

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

function ensureLandscapeCanvas(canvas) {
  if (canvas.width >= canvas.height) {
    return canvas;
  }

  const rotated = document.createElement('canvas');
  rotated.width = canvas.height;
  rotated.height = canvas.width;

  const ctx = rotated.getContext('2d');
  ctx.translate(rotated.width, 0);
  ctx.rotate(Math.PI / 2);
  ctx.drawImage(canvas, 0, 0);

  return rotated;
}

async function handleShare() {
  let canvas = gridToCanvas();

  // Keep portrait device captures landscape when shared.
  if (rows > cols) {
    canvas = ensureLandscapeCanvas(canvas);
  }

  // Convert canvas to Blob
  const blob = await new Promise(resolve =>
    canvas.toBlob(resolve, 'image/png')
  );

  if (!blob) {
    return;
  }

  const file = new File([blob], 'griddle.png', { type: 'image/png' });

  // Try Web Share API (mobile Safari, Chrome Android, etc.)
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title: 'Griddled this for you...',
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
