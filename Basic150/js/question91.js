// Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) in a given array of positive integers.
function maxConsecutiveSum(arr, m) {
  let maxSum = 0;
  for (let i = 0; i < arr.length - (m - 1); i++) {
    let sum = 0;
    for (j = i; j < (i+m); j++) {
      sum = sum + arr[j];
    }
    maxSum < sum ? (maxSum = sum) : null;
  }

  return maxSum;
}

console.log(maxConsecutiveSum([1, 2, 3, 14, 5], 2));
console.log(maxConsecutiveSum([2, 3, 5, 1, 6], 3));
console.log(maxConsecutiveSum([9, 3, 5, 1, 7], 2));
