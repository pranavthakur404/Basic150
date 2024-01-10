// Write a JavaScript program to find the number of even digits in a given integer.
function numberOfEvenDigits(num) {
  let counter = 0;
  while (num) {
    if ((num % 10) % 2 == 0) {
      counter += 1;
    }
    num = Math.floor(num / 10);
  }
  return counter;
}
console.log(numberOfEvenDigits(123));
console.log(numberOfEvenDigits(1020));
console.log(numberOfEvenDigits(102));
