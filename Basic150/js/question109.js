// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
function sortedPrime(num) {
  let arr = [];
  for (let i = 2; i <= num; i++) {
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        break;
      }
    }
    if (j == i) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(sortedPrime(5));
console.log(sortedPrime(11));
console.log(sortedPrime(19));
