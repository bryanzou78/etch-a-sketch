const gridContainer = document.getElementById('grid-container');
const clearBtn = document.getElementById('clear-btn');
const gridMultiplier = 16;
let isDrawing = false;

//create grid based on grid multiplier

function createGrid (multiplier) {
    const cellCount = multiplier * multiplier;
    let cellWidthHeight = 600/`${multiplier}`;

    for (let i = 0; i < cellCount; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        
        gridCell.style.width = cellWidthHeight + 'px';
        gridCell.style.height = cellWidthHeight + 'px';
        
        gridContainer.appendChild(gridCell);    
    }
}

//when mouse pressed down, color boxes that mouse moves over

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

//clear grid back to white background
 function clearGrid () {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
 }


//create grid function call and event listeners

createGrid (gridMultiplier);

gridContainer.addEventListener('mousedown', startDrawing);
gridContainer.addEventListener('mouseup', stopDrawing);
gridContainer.addEventListener('mouseleave', stopDrawing);
gridContainer.addEventListener('mousemove', colorCell);

clearBtn.addEventListener('click', clearGrid);




