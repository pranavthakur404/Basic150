// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
const firstNumber = document.querySelector(".input1");
const secondNumber = document.querySelector(".input2");
const checkBtn = document.querySelector(".checkBtn");
const result = document.querySelector(".result");
checkBtn.addEventListener("click", () => {
  if (firstNumber.value && secondNumber.value) {
    if (firstNumber.value !== secondNumber.value) {
      let r = parseInt(firstNumber.value) + parseInt(secondNumber.value);
      result.textContent = r;
    } else {
      result.textContent =
        (parseInt(firstNumber.value) + parseInt(secondNumber.value)) * 3;
    }
  } else {
    alert("Field should not be blank. ");
  }
});
