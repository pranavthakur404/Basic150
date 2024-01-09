// Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.
function findMaxNumber(num) {
  let withoutLastDigit = Math.floor(num / 10);
  let withoutFirstDigit = num.toString().slice(1);
  withoutFirstDigit = Number(withoutFirstDigit);
  return withoutLastDigit > withoutFirstDigit ? withoutLastDigit : withoutFirstDigit;
}
console.log(findMaxNumber(100));
console.log(findMaxNumber(10));
console.log(findMaxNumber(1245));
