const body = document.body;

function windowSizeBGColor() {
  const width = window.innerWidth;

  if (width > 970) {
    body.className = "big-width";
  } else if (width < 700) {
    body.className = "small-width";
  } else {
    body.className = "";
  }
}

windowSizeBGColor();
window.addEventListener("resize", windowSizeBGColor);
