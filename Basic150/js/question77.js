// Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.
function test_1_3(arr) {
  for (let n of arr) {
    if (n == 1 || n == 3) {
      return true;
      s;
    }
  }
  return false;
}
console.log(test_1_3([1, 5]));
console.log(test_1_3([2, 3]));
console.log(test_1_3([7, 5]));
