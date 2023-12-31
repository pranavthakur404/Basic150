// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.
const inputNumber = document.querySelector(".inputNumber");
const checkBtn = document.querySelector(".checkBtn");
const result = document.querySelector(".result");
let calulatedValue;
checkBtn.addEventListener("click", () => {
  if (inputNumber.value < 13) {
    calulatedValue = 13 - inputNumber.value;
    result.textContent = calulatedValue;
  } else {
    calulatedValue = (inputNumber.value - 13) * 2;
    result.textContent = calulatedValue;
  }
});
