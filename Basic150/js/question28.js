// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.
function checkInteger(num1, num2) {
  if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkInteger(12, 101));
console.log(checkInteger(52, 80));
console.log(checkInteger(15, 99));
