// Write a JavaScript program to find two elements of an array such that their absolute difference is not larger than a given integer. However, it is as close as possible to the integer.
function findNumber(arr, num) {
  let maxDif = -1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let x = Math.abs(arr[i] - arr[j]);
      if (x <= num) {
        maxDif = Math.max(maxDif, x);
      }
    }
  }
  return maxDif;
}

console.log(findNumber([12, 10, 33, 34], 10));
console.log(findNumber([12, 10, 33, 34], 24));
console.log(findNumber([12, 10, 33, 44], 40));
