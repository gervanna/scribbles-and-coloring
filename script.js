let gridSize = 10;
let gridMode = 'color';

const container = document.getElementById('container');
const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const randomBtn = document.getElementById('randomBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearAll = document.getElementById('clearAll');
const gridSize1 = document.getElementById('gridSize1');
const gridSize2 = document.getElementById('gridSize2');
const gridSize3 = document.getElementById('gridSize3');
const btnContainer = document.getElementById('options');
const buttons = btnContainer.getElementsByClassName('button');
const randomChoices = ['?', '!', '*', '#', '$', '&', '¶', '¿', '¤', '=', '+'];

function createSquares(numOfSquares) {
    container.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`;

    for (let x=0; x<(numOfSquares*numOfSquares); x++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', () => handleClick(square));

        container.appendChild(square);
    };
};
createSquares(gridSize);

function handleClick(element) {
    if (gridMode === 'color') {
        const color = colorPicker.value;
        element.style.backgroundColor = color;
    } else if (gridMode === 'random') {
        element.textContent = randomChoices[Math.floor(Math.random() * randomChoices.length)];
    } else if (gridMode === 'eraser') {
        element.textContent = null
        element.style.backgroundColor = '#ffffff';
    }    
};

function changeGridSize(size) {
    gridSize = size
    newGrid()
};

function newGrid() {
    container.innerHTML = null;
    createSquares(gridSize);
};

for (let i=0; i<buttons.length - 1; i++) {
    buttons[i].addEventListener('click', function() {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', '');
        this.className += ' active';
    }); 
};

eraserBtn.onclick = () => gridMode = 'eraser';
clearAll.onclick = () => newGrid();
colorBtn.onclick = () => gridMode = 'color';
randomBtn.onclick = () => gridMode = 'random';
gridSize1.onclick = () => changeGridSize(10);
gridSize2.onclick = () => changeGridSize(16);
gridSize3.onclick = () => changeGridSize(24);
