// Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.
function maxInteger(a) {
  let n;
  let sum = 0;
  for (let n = 0; 1; n++) {
    sum += n;
    if (sum > a) {
      return n - 1;
    }
  }
}
console.log(maxInteger(11));
console.log(maxInteger(15));
