// Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.
function checkEven(arr, d) {
  let totalNumber = 0;
  for (let num of arr) {
    if (num !== d) {
      if (num % 2 == 0) {
        totalNumber += 1;
      }
    } else {
      return totalNumber;
    }
  }
}
console.log(checkEven([1, 2, 3, 4, 5, 6, 7, 8], 5));
console.log(checkEven([1, 3, 5, 6, 7, 8], 6));
