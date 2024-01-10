// Write a JavaScript program to check whether a given number is in a given range.
function checkNumber(x, num, y) {
    if (num >= x && num <= y) {
      return true;
    }
    return false;
  }
  console.log(checkNumber(1, 2, 3));
  console.log(checkNumber(1, 2, -3));
  console.log(checkNumber(1.1, 1.2, 1.3));
  