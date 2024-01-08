// Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers.
function isOneElementIsCommon(arr1, arr2) {
  arr1 = new Set(arr1);
  arr2 = new Set(arr2);
  for (let n of arr1) {
    if (arr2.has(n)) {
      return true;
    }
  }
  return false;
}

console.log(isOneElementIsCommon([1, 2, 3], [3, 4, 5]));
console.log(isOneElementIsCommon([1, 2, 3], [5, 6, 7]));
