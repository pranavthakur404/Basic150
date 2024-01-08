// Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.
function not_container_1_3(arr) {
  for (let n of arr) {
    if (n == 1 || n == 3) {
      return false;
    }
  }
  return true;
}
console.log(not_container_1_3([7, 8]));
console.log(not_container_1_3([3, 2]));
console.log(not_container_1_3([0, 1]));
