// Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.
function maxPossibleDifference(arr) {
  let maxDif = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length - 1; j++) {
      if (maxDif < Math.abs(arr[i] - arr[j + 1])) {
        maxDif = Math.abs(arr[i] - arr[j + 1]);
      }
    }
  }
  return maxDif;
}

console.log(maxPossibleDifference([1, 2, 3, 8, 9]));
console.log(maxPossibleDifference([1, 2, 3, 18, 9]));
console.log(maxPossibleDifference([13, 2, 3, 8, 9]));
