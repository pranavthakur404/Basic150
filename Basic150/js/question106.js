// Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.
function checkDivision(num, d) {
  if (d == 1) {
    return num;
  }
  while (num % d == 0) {
    num = num / d;
  }
  return num;
}
console.log(checkDivision(-12, 2));
console.log(checkDivision(13, 2)); 
console.log(checkDivision(13, 1)); 
