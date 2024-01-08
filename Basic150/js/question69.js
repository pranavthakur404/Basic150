// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
function sumOfArray(arr) {
  if (arr.length == 3) {
    let sum = 0;
    for (let a of arr) {
      sum += a;
    }
    return sum;
  }
}

console.log(sumOfArray([10, 32, 20]));
console.log(sumOfArray([5, 7, 9]));
console.log(sumOfArray([0, 8, -11]));
