let gridSize = 16;
const newGridButton = document.querySelector(".new-grid");
const colourButtons = document.querySelectorAll(".controllers > button");
let chosenColour = "black";

createGrid(16);

colourButtons.forEach(button => button.addEventListener("click", (e) => {
  chosenColour = e.target.textContent.toLowerCase();
}))

newGridButton.addEventListener("click", () => {
  gridSize = +prompt(
    "Enter the length of each side of the grid (up to 100):", gridSize
  );
  
  if (gridSize) {
    gridSize = (gridSize < 100) ? gridSize : 100;
    
    createGrid(gridSize);
  }
});

function createGrid(size) {
  const gridContainer = document.querySelector(".grid-container");
  const gridTotalWidth = gridContainer.offsetWidth;
  const gridTotalHeight = gridContainer.offsetHeight;
  
  gridContainer.textContent = '';
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement("div");
      square.style.width = `${gridTotalWidth / size}px`
      square.style.height = `${gridTotalHeight / size}px`;

      square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = pickColour();
      });

      gridContainer.appendChild(square);
    }
  }
}

function pickColour() {
  const rainbowColours = [
    "red", "orange", "yellow", "green", "blue", "indigo", "violet"
  ];
  const randomIndex = Math.floor(Math.random() * rainbowColours.length);
  
  return chosenColour === "black" ? chosenColour.toLowerCase() :
    rainbowColours[randomIndex];
}
