// Grab references to the HTML container and the resize button
const container = document.getElementById('sketch-container');
const sizeBtn = document.getElementById('size-setting-btn');

// Function to create the grid layout
function createGrid(squaresPerSide) {
    // 1. Clear any existing grid squares inside the container
    container.innerHTML = '';

    // 2. Calculate the total number of squares needed (e.g., 16 * 16 = 256)
    const totalSquares = squaresPerSide * squaresPerSide;

    // 3. Calculate exact width and height in pixels for each square to fit in a 600px frame
    const squareSize = 600 / squaresPerSide;

    // 4. Loop to generate each individual square div
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        // Apply dynamic inline sizing styles based on our math
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // 5. Add the hover effect (leaves a trail when mouse enters the square)
        square.addEventListener('mouseenter', () => {
            square.classList.add('painted');
        });

        // Append the newly created square to our sketch board container
        container.appendChild(square);
    }
}

// Function to handle changing the grid size via user prompt
function changeGridSize() {
    let userInput = prompt("Enter the number of squares per side (Maximum 100):");

    // If the user hits cancel, do nothing
    if (userInput === null) return;

    let size = parseInt(userInput);

    // Validate the input to prevent performance crashing
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // Generate the new sketchpad grid with the chosen dimension
    createGrid(size);
}

// Attach the click event listener to the configuration button
sizeBtn.addEventListener('click', changeGridSize);

// Initialize the application with a default 16x16 grid layout on first load
createGrid(16);