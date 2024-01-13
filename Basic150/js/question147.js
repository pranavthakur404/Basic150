// Write a JavaScript program to compute the sum of all the digits that occur in a given string.
function sumOfInteger(str) {
  let sum = 0;
  for (let char of str) {
    if (char >= "0" && char <= "9") {
      sum = sum + parseInt(char);
    }
  }
  return sum;
}
console.log(sumOfInteger("abcd12efg9"));
console.log(sumOfInteger("w3resource"));
