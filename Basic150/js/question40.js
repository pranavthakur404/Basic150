// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
function checkInteger(num1, num2) {
  if (
    num1 == 8 ||
    num2 == 8 ||
    Math.abs(num1 - num2) == 8 ||
    num1 + num2 == 8
  ) {
    return true;
  }
  return false;
}
console.log(checkInteger(7, 8));
console.log(checkInteger(16, 8));
console.log(checkInteger(24, 32));
console.log(checkInteger(17, 18));
