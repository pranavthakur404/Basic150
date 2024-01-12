// Write a JavaScript program to find the position of the rightmost round number in an array of integers. If there are no round numbers, the function returns 0.
// Note: A round number is informally considered to be an integer that ends with one or more zeros.
function findRoundNumber(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 10 == 0) {
      return i;
    }
  }
  return 0;
}
console.log(findRoundNumber([1, 22, 30, 54, 56]));
console.log(findRoundNumber([1, 22, 32, 54, 56]));
console.log(findRoundNumber([1, 22, 32, 54, 50]));
