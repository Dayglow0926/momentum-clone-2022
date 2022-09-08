const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];
const body = document.querySelector("body");

function changeBackgroundColor() {
  const color1 = Math.floor(Math.random() * colors.length);
  let color2 = Math.floor(Math.random() * colors.length);

  while (color1 === color2) {
    color2 = Math.floor(Math.random() * colors.length);
  }

  body.style.background = `linear-gradient(0.25turn,${colors[color1]}, ${colors[color2]})`;
}

document
  .querySelector("button")
  .addEventListener("click", changeBackgroundColor);
