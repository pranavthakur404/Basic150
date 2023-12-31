// Write a JavaScript program to check two given integers whether one is positive and another one is negative.
// In lay main, dono mai se ek positive or ek negative hona chahiye
function checkNumber(num1, num2) {
  if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumber(2, 2));
console.log(checkNumber(-2, 2));
console.log(checkNumber(2, -2));
console.log(checkNumber(-2, -2));
