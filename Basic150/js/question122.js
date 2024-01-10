// Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence.
function checkArray(arr) {
  let flag = false;
  let direction = arr[0] < arr[1] ? true : false; // true of increasing and false for decreasing
  if (direction) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= arr[i + 1]) {
        flag = false;
        return false;
      }
    }
    return true;
  } else {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] <= arr[i - 1]) {
        flag = false;
        return false;
      }
    }
    return true;
  }
}
console.log(checkArray([1, 2, 3]));
console.log(checkArray([1, 2, 2]));
console.log(checkArray([-3, -2, -1]));
