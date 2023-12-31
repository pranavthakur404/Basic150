// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
const input1 = document.querySelector(".number1");
const input2 = document.querySelector(".number2");
const checkBtn = document.querySelector(".checkBtn");
const result = document.querySelector(".result");

checkBtn.addEventListener("click", () => {
  if (input1.value && input2.value) {
    if (input1.value == 50 || input2.value == 50) {
      result.textContent = "True";
      return true;
    } else if (parseInt(input1.value) + parseInt(input2.value) == 50) {
      result.textContent = "True";
      return true;
    } else {
      result.textContent = "Fasle";
      return false;
    }
  } else {
    alert("Field should not be empty");
  }
});
