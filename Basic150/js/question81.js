// Write a JavaScript program to add two digits to a given positive integer of length two.
function addDigitOfInteger(num) {
  let arr = num.toString().split("");
  let sum = 0;
  for (let n of arr) {
    sum = sum + Number(n);
  }
  return sum;
}

console.log(addDigitOfInteger(25));
console.log(addDigitOfInteger(50));
