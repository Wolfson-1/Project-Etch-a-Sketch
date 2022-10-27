//variables
let gridSize = 256;

// Query selectors for main div container & resetn button
const sketchContainer = document.querySelector(".sketchContainer");
const resetButton = document.querySelector(".reset");
const sizeButton = document.querySelector(".size");

// for loop to create div grid & apply background color change effect

for (let x = 0; x < gridSize; x++) {
    //creation of div grid
   const sketchDivCol = document.createElement("div");
   sketchDivCol.classList.add("sketchDivCol");
   sketchContainer.appendChild(sketchDivCol);
   
   //mouse over backrgound color change
   sketchDivCol.addEventListener('mouseover', () => {
    sketchDivCol.style.background = 'black';
});

//event listener for reset button to turn all divs backto grey
resetButton.addEventListener('click', () => {
    sketchDivCol.style.background = 'grey';
})

};

// function to change grid size 
function gridSizeChange(size){
    sketchContainer.style.gridTemplateColumns = repeat(size, 1fr);
    sketchContainer.style.gridTemplateRows = repeat(size, 1fr);
};

//event listener for  resize of grid
sizeButton.addEventListener('click', () => {
    
    gridSize = prompt("Enter grid size", "0");

    if (gridSize >= 0) {
        alert("Thanks!");
        gridSizeChange(gridSize);
    } else {
        alert("Not a number, please try again")
        gridSize = 256;
    }
});









