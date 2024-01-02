// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.
function updateString(str) {
  if (str.length > 3) {
    let newStr = str.split("");
    for (let i = 0; i < 3; i++) {
      newStr[i] = newStr[i].toLowerCase();
    }
    return newStr.join("");
  } else {
    return str.toUpperCase();
  }
}
console.log(updateString("python"))
console.log(updateString("py"))
console.log(updateString("JAVAscript"))
