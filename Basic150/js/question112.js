// Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number
function trailingZero(num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  //   finding trailing zero
  let counter = 0;
  while (factorial % 10 == 0) {
    counter += 1;
    factorial /= 10;
  }
  return counter;
}
console.log(trailingZero(8));
console.log(trailingZero(9));
console.log(trailingZero(10));
