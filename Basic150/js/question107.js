// Write a JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one.
// For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
// The output of [2, 4, 6] -> 2 - (2,4), (2,6)
// The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)
function sortedPair(arr) {
  counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        if (arr[j] % arr[i] === 0) {
          counter += 1;
        }
      }
    }
  }
  return counter;
}
console.log(sortedPair([1, 2, 3]));
console.log(sortedPair([2, 4, 6]));
console.log(sortedPair([2, 4, 16]));
