// Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.

function repeatLastChar(str) {
  if (str.length >= 3) {
    str = str.split("");
    let lastThree = [];
    for (let i = str.length - 3; i <= str.length - 1; i++) {
      lastThree.push(str[i]);
    }
    return lastThree.join("").repeat(4);
  } else {
    return false;
  }
}
console.log(repeatLastChar("Python 3.0"));
console.log(repeatLastChar("JS"));
console.log(repeatLastChar("JavaScript"));
