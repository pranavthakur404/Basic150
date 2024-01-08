// Write a JavaScript program to find the kth greatest element in a given array of integers.
function kthGreatestElement(arr, term) {
  if (term <= arr.length) {
    arr = arr.sort((a, b) => {
      return b - a;
    });
    return arr[term - 1];
  }
}

console.log(kthGreatestElement([1, 2, 6, 4, 5], 3));
console.log(kthGreatestElement([-10, -25, -47, -36, 0], 1));
