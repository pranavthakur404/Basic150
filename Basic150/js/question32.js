// JavaScript: Find a value which is nearest to 100 from two different given integer values
function checkNearest(num1, num2) {
  if (num1 == num2) {
    return false;
  } else if (Math.abs(num1 - 100) > Math.abs(num2 - 100)) {
    return num2;
  } else {
    return num1;
  }
}
console.log(checkNearest(90, 89));
console.log(checkNearest(-90, -89));
console.log(checkNearest(90, 90));
