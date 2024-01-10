// Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one.
function findNotEqual(x, y, z) {
  if (x == y || x == z || y == z) {
    if (x == y) {
      return z;
    } else if (x == z) {
      return y;
    } else {
      return x;
    }
  } else {
    return "Not any numbers are equal";
  }
}
console.log(findNotEqual(1, 2, 2));
console.log(findNotEqual(1, 1, 2));
console.log(findNotEqual(1, 2, 3));
