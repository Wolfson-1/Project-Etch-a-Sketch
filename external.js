// Query selectors & variables for main div container & reset button
let gridSize = 16;
const sketchContainer = document.querySelector(".sketchContainer");
const resetButton = document.querySelector(".reset");
const sizeButton = document.querySelector(".size");


// for loop to create div grid & apply background color change effect
   
function createGrid() {
for (let x = 0; x < `${gridSize * gridSize}` ; x++) {
        //creation of div grid
       const sketchDivCol = document.createElement("div");
       sketchDivCol.classList.add("sketchDivCol");
       sketchContainer.appendChild(sketchDivCol);

       sketchContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr`;
       sketchContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr`;
       sketchDivCol.addEventListener('mouseover', () => {
       sketchDivCol.style.background = 'black';
    });

    //event listener for reset button to turn all divs backto grey
    resetButton.addEventListener('click', () => {
    sketchDivCol.style.background = 'grey';
});

}};

//event listener for  resize of grid
sizeButton.addEventListener('click', () => {
    
    gridSize = prompt("Enter grid size", "0");

    if (gridSize >= 0 && gridSize < 100) {
        alert("Thanks!");
        createGrid();

    } else {
        alert("Not possible! please try again")
    }
});


createGrid(gridSize);