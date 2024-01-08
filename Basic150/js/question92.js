// Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.
function maximumDifference(arr) {
  let max = 0;
  for (i = 0; i < arr.length - 1; i++) {
    if (max < Math.abs(arr[i] - arr[i - 1])) {
      max = Math.abs(arr[i] - arr[i - 1]);
    }
  }
  return max;
}

console.log(maximumDifference([1, 2, 3, 8, 9]));   
console.log(maximumDifference([1, 2, 3, 18, 9]));  
console.log(maximumDifference([13, 2, 3, 8, 9]));  
