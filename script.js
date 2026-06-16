const container = document.getElementById('container');
const resizeBtn = document.getElementById('resize-btn');

// Generates the grid layout inside the fixed container space
function createGrid(squaresPerSide) {
    // Clear out the container's previous child elements
    container.innerHTML = '';

    // Calculate total layout elements needed
    const totalSquares = squaresPerSide * squaresPerSide;
    
    // Determine sizing properties so they scale correctly within 500px total space
    const squareSize = 500 / squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        
        // Use inline styles to give every square an exact sizing footprint
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Step 3: Add the interactive drawing listener ("mouseenter")
        square.addEventListener('mouseenter', () => {
            square.classList.add('active');
        });

        container.appendChild(square);
    }
}

// Step 4: Handle user customization inputs
function handleResize() {
    let userInput = prompt("Enter number of squares per side (Maximum: 100):");
    
    // Ignore cancellations
    if (userInput === null) return; 

    let size = parseInt(userInput);

    // Validate prompt inputs to guard against browser crashes
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // Build the new sized grid canvas
    createGrid(size);
}

// Attach control triggers
resizeBtn.addEventListener('click', handleResize);

// Initialize with a standard 16x16 layout on first application load
createGrid(16);