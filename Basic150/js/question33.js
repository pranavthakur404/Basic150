// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
function checkInteger(num1, num2) {
  if (
    (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) ||
    (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkInteger(44, 56));
console.log(checkInteger(70, 95));
console.log(checkInteger(50, 89));
