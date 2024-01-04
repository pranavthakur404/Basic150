// Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.
function checkIs15(num1, num2) {
  if (
    num1 == 15 ||
    num2 == 15 ||
    num1 + num2 == 15 ||
    Math.abs(num1 - num2) == 15
  ) {
    return true;
  } 
  return false;
}

console.log(checkIs15(15, 9));
console.log(checkIs15(25, 15));
console.log(checkIs15(7, 8));
console.log(checkIs15(25, 10));
console.log(checkIs15(5, 9));
console.log(checkIs15(7, 9));
console.log(checkIs15(9, 25));
