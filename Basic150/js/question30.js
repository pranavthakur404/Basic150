// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.
function checkString(str) {
  if (
    str.substring(4, 10) == "script" ||
    str.substring(4, 10) == "Script" ||
    str.substring(4, 10) == "SCRIPT"
  ) {
    return str.substring(0, 4) + str.substring(10, str.length);
  } else {
    return str;
  }
}

console.log(checkString("javascript"));
console.log(checkString("javascriptpranav"));
console.log(checkString("ecmaScript"));
