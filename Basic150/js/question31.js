// Write a JavaScript program to find the largest of three given integers.
function largestNumber(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    } else {
      return c;
    }
  } else {
    if (b > c) {
      return b;
    } else {
      return c;
    }
  }
}
console.log(largestNumber(5, 9, 7));
