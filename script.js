const container = document.querySelector(".container");
const button = document.querySelector("button");

function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for(let i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeGrid(16, 16);

button.addEventListener("click", () => {
  let size = parseInt(prompt("Choose the grid size, maximum 100"));
  
  if (size > 100) {
    alert("Higher than 100 try a smaller number");
  } else if (size < 0) {
    alert("Grid too small");
  } else {
    document.querySelectorAll(".grid-item").forEach(e => e.remove());
    makeGrid(size, size);

  }
});

container.addEventListener("mouseover", (e) => {
  if (e.target.className === "grid-item") {
    e.target.style.backgroundColor = "black";
  }
})