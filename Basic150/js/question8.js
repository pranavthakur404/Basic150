// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".

const form = document.querySelector("form");
const input = document.querySelector("input");
const result = document.querySelector(".result");
let randomNumebr = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log(randomNumebr);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.length !== 0) {
    if (input.value == randomNumebr) result.textContent = "Good Work";
    else result.textContent = "Not Matched";
  } else {
    result.textContent = "Your did not guess any number !! ";
  }
});
