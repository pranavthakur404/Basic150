// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.
const input = document.querySelector(".inputField");
const checkBtn = document.querySelector(".checkBtn");
const result = document.querySelector(".result");

checkBtn.addEventListener("click", () => {
  console.log(input.value);
  if (input.value <= 19) {
    result.textContent = 19 - input.value;
  } else {
    result.textContent = (input.value - 19) * 3;
  }
});
