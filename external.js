// Query selectors for main div container & resetn button
const sketchContainer = document.querySelector(".sketchContainer");
const resetButton = document.querySelector(".reset");

// for loop to create div grid & apply background color change effect
for (let x = 0; x < 256; x++) {
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





