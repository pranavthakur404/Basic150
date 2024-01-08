// Write a JavaScript program to rotate the elements left in a given array of integers of length 3.
function rotateLeft(arr) {
  if (arr.length == 3) {
    let temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
  }
  return arr;
}
console.log(rotateLeft([3, 4, 5]));
console.log(rotateLeft([0, -1, 2]));
console.log(rotateLeft([7, 6, 5]));
