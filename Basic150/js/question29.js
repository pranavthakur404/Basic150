// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.
function checkInteger(num1, num2, num3) {
  if (
    (num1 >= 50 && num1 <= 99) ||
    (num2 >= 50 && num2 <= 99) ||
    (num3 >= 50 && num3 <= 99)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkInteger(50, 90, 99));
console.log(checkInteger(5, 9, 199));
console.log(checkInteger(65, 89, 199));
console.log(checkInteger(65, 9, 199));
