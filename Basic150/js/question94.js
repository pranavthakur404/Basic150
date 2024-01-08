// Write a JavaScript program to find the number appearing most frequently in a given array of integers.
function frequentNumbers(arr) {
  let unique = new Set(arr);
  let oldMax = 0;
  let count = 0;
  let maxValue;
  for (let n of unique) {
    for (let x of arr) {
      if (n == x) {
        count += 1;
      }
    }
    if (oldMax < count) {
      oldMax = count;
      maxValue = n;
    }
    count = 0;
  }
  return maxValue;
}

console.log(frequentNumbers([1, 2, 1, 1, 1, 8, 1, 9]));
