// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
function checkLastDigit(a, b, c) {
  let x = a % 10;
  let y = b % 10;
  let z = c % 10;

  if (x == y && y == z) {
    return "All three has same rightmost digit";
  } else if (x == y || y == z || x == z) {
    return "Two number has same rightmost digit";
  } else {
    return "Non of has same rightmost digit";
  }
}
console.log(checkLastDigit(22,32,42))
console.log(checkLastDigit(102,302,2))
console.log(checkLastDigit(20,22,45))
