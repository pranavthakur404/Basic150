// Write a JavaScript program to find the number of elements in both arrays.
function findElement(arr1, arr2) {
  if (arr1.length == arr2.length) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] == arr2[i]) {
        count++;
      }
    }
    return count;
  }
}
console.log(findElement([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(findElement([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(findElement([1, 2, 3, 4], [11, 22, 33, 44]));
