// Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

const form = document.querySelector("form");
const result = document.querySelector(".result");
const input1 = document.querySelector(".firstInput");
const input2 = document.querySelector(".secondInput");
const multiplyBtn = document.querySelector(".multiplyBtn");
const devideBtn = document.querySelector(".devideBtn");

console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

multiplyBtn.addEventListener("click", () => {
  if (input1.value.length !== 0 && input2.value.length !== 0) {
    let answer = input1.value * input2.value;
    result.textContent = answer;
  } else {
    result.textContent = "Please fill both the input";
  }
});
devideBtn.addEventListener("click", () => {
  if (input1.value.length !== 0 && input2.value.length !== 0) {
    let answer = input1.value / input2.value;
    result.textContent = answer;
  } else {
    result.textContent = "Please fill both the input";
  }
});
