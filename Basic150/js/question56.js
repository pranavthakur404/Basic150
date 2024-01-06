// Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.
function divisionString(num1, num2) {
  let r = num1 / num2;
  r = Math.round(r);
  r = r.toString().split("");
  return r;
}

console.log(divisionString(80, 6));
