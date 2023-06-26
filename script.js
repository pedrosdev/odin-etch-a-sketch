const newGridBtn = document.querySelector(".new-grid");

newGridBtn.addEventListener("click", () => {
  let gridSideLength = +prompt("Enter the length of each side of the grid (up to 100):", 16);

  if (gridSideLength) {
    gridSideLength = (gridSideLength < 100) ? gridSideLength : 100;
    
    createGrid(gridSideLength);
  }
})

createGrid(16);

function createGrid(number) {
  const gridContainer = document.querySelector(".grid-container");
  const gridTotalWidth = gridContainer.offsetWidth;
  const gridTotalHeight = gridContainer.offsetHeight;

  gridContainer.textContent = '';

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      const square = document.createElement("div");
      square.style.width = `${gridTotalWidth / number}px`
      square.style.height = `${gridTotalHeight / number}px`;

      square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "#000000";
      })

      gridContainer.appendChild(square);
    }
  }
}
