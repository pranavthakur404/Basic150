// Write a JavaScript program to add two positive integers without carrying.
function addWithoutCarrying(num1, num2) {
  let x = 1;
  let result = 0;
  while (num1 > 0 && num2 > 0) {
    result += ((num1 + num2) % 10) * x;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
    x *= 10;
  }
  return result;
}
console.log(addWithoutCarrying(222, 911));
console.log(addWithoutCarrying(200, 900));
