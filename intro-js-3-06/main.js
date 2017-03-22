// Declare variables.
var number = Math.floor(Math.random() * 100);
var input = document.querySelector("#guess-input");
var button = document.querySelector("#guess-button");
var newbutton = document.querySelector("#new-button");
var output = document.querySelector("#output");

function makeGuess () {
  // Get input from user.
  var guess = parseInt(input.value, 10);

  // Check if the input is correct or not.
  if (guess === number) {
    output.innerHTML = "You're correct!";
  } else if (guess < number) {
    output.innerHTML = "Number is too low.";
  } else if (guess > number) {
    output.innerHTML = "Number is too high.";
  } else {
    output.innerHTML = "Input error.";
  }
}

function newGame () {
  // Generate a new random number.
  number = Math.floor(Math.random() * 100);

  // Reset everything else.
  input.value = "";
  output.innerHTML = "";
}

// Make buttons clickable.
button.addEventListener('click', makeGuess);
newbutton.addEventListener('click', newGame);
