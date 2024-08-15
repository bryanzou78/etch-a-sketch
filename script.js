const gridContainer = document.getElementById('grid-container');
const clearBtn = document.getElementById('clear-btn');
const sizeSlider = document.getElementById('size-slider');
const defaultMultiplier = 16;
let gridMultiplier = defaultMultiplier;
let isDrawing = false;

//Create grid based on grid multiplier
function createGrid () {
    //Clear existing grid at start of function to avoid multiple grids from slider input
    gridContainer.innerHTML = '';

    let cellWidthHeight = 600/gridMultiplier;

    //Fragment document so that all grid cells are created at the same time
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < gridMultiplier * gridMultiplier; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        
        gridCell.style.width = cellWidthHeight + 'px';
        gridCell.style.height = cellWidthHeight + 'px';
        
        fragment.appendChild(gridCell);    
    }
    gridContainer.appendChild(fragment);
}

//Track when drawing is active

function startDrawing() {
    isDrawing = true;
}

function stopDrawing() {
    isDrawing = false;
}

function colorCell(event) {
    if (!isDrawing) return;

    const cell = event.target;
    if (cell.classList.contains('grid-cell')) {
        cell.style.backgroundColor = 'black';
    }
}

//Clear grid back to white background
 function clearGrid () {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
 }

//Update grid size based on slider input, requestAnimationFrame so function is executed before next repaint
let frameRequested = false;

function updateGrid() {
    gridMultiplier = sizeSlider.value;

    if (frameRequested) return;

    frameRequested = true;
    requestAnimationFrame(() => {
        createGrid();
        frameRequested = false;
    })
}

//Debounce to improve performance by delaying grid creation
let debounceTimer;

function debounce(func, delay) {
    return function(...args) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
}

//Create grid function call and event listeners

createGrid ();

gridContainer.addEventListener('mousedown', startDrawing);
gridContainer.addEventListener('mouseup', stopDrawing);
gridContainer.addEventListener('mouseleave', stopDrawing);
gridContainer.addEventListener('mousemove', colorCell);

clearBtn.addEventListener('click', clearGrid);

sizeSlider.addEventListener('input', debounce(updateGrid, 300));



