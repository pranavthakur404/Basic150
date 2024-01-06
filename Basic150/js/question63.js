// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater than or equal to three.
function getMiddleThreeChar(str) {
  if (str.length % 2 == 0) {
    return str;
  } else {
    let newStr = str.split("");
    return newStr.slice(newStr.length / 2 - 1, newStr.length / 2 + 2).join("");
  }
}

console.log(getMiddleThreeChar("abcdefg"));
console.log(getMiddleThreeChar("HTML5"));
console.log(getMiddleThreeChar("Python"));
console.log(getMiddleThreeChar("Exercises"));
console.log(getMiddleThreeChar("PHP"));
