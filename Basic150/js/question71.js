// Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.
function checkOne(arr) {
  if (arr.length >= 1) {
    if (arr[0] == 1 || arr[arr.length - 1] == 1) {
      return true;
    }
  }
  return false;
}

console.log(checkOne([1, 3, 5]));
console.log(checkOne([1, 3, 5, 1]));
console.log(checkOne([2, 4, 6]));
