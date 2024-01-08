// Write a JavaScript program to replace all numbers with a specified number in an array of integers.
function replaceValue(arr, old, newValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == old) {
      arr[i] = newValue;
    }
  }
  return arr;
}
console.log(replaceValue([1, 2, 3, 2, 2, 8, 1, 9], 2, 5));
