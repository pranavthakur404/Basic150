// Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.
function checkFirstAndLast(arr) {
  if (arr.length >= 3) {
    if (arr[0] == arr[arr.length - 1]) {
      return true;
    }
  }
  return false;
}

console.log(checkFirstAndLast([10, 20, 30]));
console.log(checkFirstAndLast([10, 20, 30, 10]));
console.log(checkFirstAndLast([20, 20, 20]));
