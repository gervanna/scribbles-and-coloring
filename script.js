const startColor = '#006400';
const startSize = 16;

const container = document.getElementById('container');
const colorPicker = document.getElementById('colorPicker');
const colorBtn = document.getElementById('colorBtn');
const randomBtn = document.getElementById('randomBtn');
const eraser = document.getElementById('eraser');
const clearAll = document.getElementById('clearAll');

let gridItem;

function makeGrid(numOfGrids) {
    container.style.gridTemplateColumns = `repeat(${numOfGrids}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numOfGrids}, 1fr)`;

    for (x=0; x<(numOfGrids*numOfGrids); x++) {
        gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.textContent = 'hi';
        gridItem.addEventListener('click', colorChanger);

        container.appendChild(gridItem);
    };
};
makeGrid(startSize);


function colorChanger() {
    let color = document.getElementById('colorPicker').value;
    gridItem.style.backgroundColor = color;
};

colorChanger();