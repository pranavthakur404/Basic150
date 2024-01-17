// Write a JavaScript program to remove specified elements from the left of a given array of elements.
function removeElementFromLeft(arr, target = 1) {
  return arr.slice(target);
}
console.log(removeElementFromLeft([1, 2, 3]));
console.log(removeElementFromLeft([1, 2, 3], 1));
console.log(removeElementFromLeft([1, 2, 3], 2));
console.log(removeElementFromLeft([1, 2, 3], 4));
