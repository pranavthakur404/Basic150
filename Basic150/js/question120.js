// Write a JavaScript program to check if a point lies strictly inside the circle.
// Input:
// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)
function pointLiesOrNot(a, b, x, y, r) {
  let points = (a - x) * (a - x) + (b - y) * (b - y);
  r = r * r;
  if (points < r) {
    return true;
  }
  return false;
}

console.log(pointLiesOrNot(0, 0, 2, 4, 6));
console.log(pointLiesOrNot(0, 0, 6, 8, 6));
