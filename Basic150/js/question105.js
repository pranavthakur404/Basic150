// Write a JavaScript program to find the number of times to replace a given number with the sum of its digits. This is until it converts to a single-digit number.
function numberOfReplacement(num) {
  let replacement = 0;
  while (1) {
    if (num >= 1 && num <= 9) {
      break;
    } else {
      replacement += 1;
      let sum = 0;
      num = num.toString().split("");
      for (let n of num) {
        sum = sum + Number(n);
      }
      num = sum;
    }
  }
  return replacement;
}
console.log(numberOfReplacement(123));
console.log(numberOfReplacement(156));
