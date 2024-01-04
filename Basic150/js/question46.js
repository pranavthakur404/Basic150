// Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.
function checkIsMultiple(num1, num2) {
  if (
    ((num1 % 7 == 0 || num1 % 11 == 0) && num2 % 7 !== 0 && num2 % 11 !== 0) ||
    ((num2 % 7 == 0 || num2 % 11 == 0) && num1 % 7 !== 0 && num1 % 11 !== 0)
  ) {
    return true;
  }
  return false;
}

console.log(checkIsMultiple(14, 21));
console.log(checkIsMultiple(14, 20));
console.log(checkIsMultiple(16, 20));
