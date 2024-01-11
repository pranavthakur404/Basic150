// . Write a JavaScript program to find all distinct prime factors of a given integer.
function primeFactor(num) {
  let i = 2;
  let factors = new Set();
  while (num > 1) {
    if (num % i == 0) {
      factors.add(i);
      num = Math.floor(num / i);
    } else {
      i++;
    }
  }

  return Array.from(factors);
}

console.log(primeFactor(100));
console.log(primeFactor(101));
console.log(primeFactor(103));
console.log(primeFactor(104));
console.log(primeFactor(105));
