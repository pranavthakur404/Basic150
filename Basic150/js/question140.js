// Write a JavaScript program to check whether all the digits in a given number are the same or not.
function checkAllDigits(num) {
  num = num.toString().split("");
  let result = num.every((li) => {
    return num[0] == li;
  });
  return result;
}
console.log(checkAllDigits(1234));
console.log(checkAllDigits(1111));
console.log(checkAllDigits(22222222));
