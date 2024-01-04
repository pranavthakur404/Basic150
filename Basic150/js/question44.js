// Write a JavaScript program to check from three given integers whether a number is greater than or equal to 20. It is less than the others.
function checkNumber(num1, num2, num3) {
  if (num1 >= 20) {
    if (num1 < num2 && num1 < num3) {
      return true;
    }
  }

  if (num2 >= 20) {
    if (num2 < num1 && num2 < num3) {
      return true;
    }
  }

  if (num3 >= 20) {
    if (num3 < num1 && num3 < num2) {
      return true;
    }
  }

  return false;
}

console.log(checkNumber(23,45,40))
console.log(checkNumber(23,23,10))
console.log(checkNumber(21,66,75))
