const body = document.querySelector("body");
const button = document.querySelector("button");
const chose = document.createElement("span");
const result = document.createElement("b");

function play_game(event) {
  event.preventDefault();
  let generate = parseInt(document.querySelector(".generate-number").value);
  const guess = parseInt(document.querySelector(".guess-number").value);

  console.log(generate, guess);

  if (generate <= 0 || guess <= 0 || isNaN(generate) || isNaN(guess)) {
    alert("Please enter a number greater than 0.");
    return;
  } else if (guess > generate) {
    alert("You cannot enter a number greater than the range.");
    return;
  }

  generate++;

  const random_number = Math.floor(Math.random() * generate);
  chose.innerText = `\n You chose: ${guess}, the machine chose: ${random_number}.`;

  if (random_number === guess) {
    result.innerText = "\nYou won!";
  } else {
    result.innerText = "\nYou lose!";
  }
  body.appendChild(chose);
  body.appendChild(result);
}

button.addEventListener("click", play_game);
