// Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not.
function checkDivisor(n1, n2, d) {
  if (n1 % d == 0 && n2 % d == 0) {
    return true;
  }
  return false;
}
console.log(checkDivisor(10, 25, 5));
console.log(checkDivisor(10, 20, 5));
console.log(checkDivisor(10, 20, 4));
