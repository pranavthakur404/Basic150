// Write a JavaScript program that checks whether the last digit of three positive integers is the same.
function checkLastDigit(num1, num2, num3) {
  let a = num1 % 10;
  let b = num2 % 10;
  let c = num3 % 10;
  if (a == b) {
    if (b == c) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(checkLastDigit(45, 45, 45));
