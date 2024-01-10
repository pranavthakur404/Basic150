// Write a JavaScript program to find the smallest prime number strictly greater than a given number.
function nextPrimeNumber(num) {
  let i, j;
  for (i = num + 1; 1; i++) {
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        break;
      }
    }
    if (j == i) {
      return i;
    }
  }
}
console.log(nextPrimeNumber(3));
console.log(nextPrimeNumber(17));
