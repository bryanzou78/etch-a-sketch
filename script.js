const gridContainer = document.getElementById('grid-container');
const gridMultiplier = 16;

//create grid based on number input

function createGrid (multiplier) {
    const cellCount = multiplier * multiplier;
    let cellWidthHeight = 600/`${multiplier}`;

    for (let i = 0; i < cellCount; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        
        gridCell.style.width = cellWidthHeight + 'px';
        gridCell.style.height = cellWidthHeight + 'px';
        
        gridContainer.appendChild(gridCell);
        
//when mouse pressed down, color boxes that mouse hovers over

        gridCell.addEventListener('mouseover', () => {
            gridCell.style.backgroundColor = 'black';
        });
        
    }
    
}

createGrid (gridMultiplier);






//reset grid