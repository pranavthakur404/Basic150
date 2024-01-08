// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
function swap_last_first_element(arr) {
  if (arr.length == 1) {
    return arr;
  } else if (arr.length > 1) {
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
  return arr;
}

console.log(swap_last_first_element([1, 2, 3, 4]));
console.log(swap_last_first_element([0, 2, 1]));
console.log(swap_last_first_element([3]));
