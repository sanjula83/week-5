// write you Scripts here
// DOM Elements
const canvas = document.getElementById('sketchPad');
const ctx = canvas.getContext('2d');
const redBtn = document.getElementById('redBtn');
const blueBtn = document.getElementById('blueBtn');
const greenBtn = document.getElementById('greenBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const currentColorDisplay = document.getElementById('currentColor');

// Initial Values
let isDrawing = false;
let currentColor = 'black';
ctx.strokeStyle = currentColor;
ctx.lineWidth = 2;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

// Helper to update color
function setColor(colorName, hexCode) {
  currentColor = hexCode;
  ctx.strokeStyle = currentColor;
  currentColorDisplay.textContent = colorName;
}

// Mouse Events
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  ctx.closePath();
});

canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});

// Color Change Events
redBtn.addEventListener('click', () => setColor('Red', '#ff0000'));
blueBtn.addEventListener('click', () => setColor('Blue', '#0000ff'));
greenBtn.addEventListener('click', () => setColor('Green', '#00ff00'));

// Eraser
eraserBtn.addEventListener('click', () => setColor('White', '#ffffff'));

// Clear Canvas
clearBtn.addEventListener('click', () => {
    ctx.fillStyle='#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  setColor('Black', '#000000');
});