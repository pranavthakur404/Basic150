// Write a JavaScript program to get the largest even number from an array of integers.
function largest_even_number(arr) {
  let largest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      if (arr[i] % 2 == 0) {
        largest = arr[i];
      }
    }
  }
  return largest;
}

console.log(largest_even_number([20, 40, 200]));
console.log(largest_even_number([20, 40, 200, 301]));
