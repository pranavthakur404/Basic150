// Write a JavaScript program to convert a specified number into an array of digits.
const integerToArray = (num) => {
  return num
    .toString()
    .split("")
    .map((li) => parseInt(li));
};

console.log(integerToArray(123));
console.log(integerToArray(1230));
