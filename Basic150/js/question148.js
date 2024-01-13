// Write a JavaScript program to swap two halves of a given array of integers of even length.
function swapHalfOfArray(arr) {
  if (arr.length % 2 == 0) {
    let len = arr.length;
    for (let i = 0, j = len / 2; i < len / 2; i++, j++) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
  return "Length is not Even";
}
console.log(swapHalfOfArray([1, 2, 3, 4, 5, 6]));
console.log(swapHalfOfArray([1, 2, 3, 4, 5, 6, 7]));
