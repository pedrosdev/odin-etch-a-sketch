populateGrid(16);

function populateGrid(number) {
  const grid = document.querySelector(".grid");
  const gridWidth = grid.offsetWidth;
  const gridHeight = grid.offsetHeight;

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      const square = document.createElement("div");
      square.style.width = `${gridWidth / number}px`
      square.style.height = `${gridHeight / number}px`;

      square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "#000000";
      })

      grid.appendChild(square);
    }
  }
}
