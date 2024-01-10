// Write a JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer.
function permutation(arr, d) {
  arr = Array.from(new Set(arr));
  if (arr.length !== d) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > d) {
      return false;
    }
  }
  return true;
}

console.log(permutation([1, 2, 3, 4, 5], 5));
console.log(permutation([1, 2, 3, 5], 5)); 
