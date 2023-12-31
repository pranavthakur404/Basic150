// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

function checkInteger(number) {
  if (Math.abs(number - 100) <= 20 || Math.abs(number - 400) <= 20) {
    return true;
  } else {
    return false;
  }
}
console.log(checkInteger(10));
console.log(checkInteger(90));
console.log(checkInteger(99));
console.log(checkInteger(199));
console.log(checkInteger(200));
