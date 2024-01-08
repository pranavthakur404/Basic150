// Write a JavaScript program to test whether a string ends with "Script". The string length must be greater than or equal to 6.
function isEndsWithScript(str) {
  if (str.length >= 6) {
    if (
      "Script" ==
      str
        .split("")
        .slice(str.length - 6)
        .join("")
    ) {
      return true;
    }
    return false;
  } else {
    return "String Length is less then 6";
  }
}

console.log(isEndsWithScript("JavaScript"));
console.log(isEndsWithScript("Java Script"));
console.log(isEndsWithScript("Java Scripts"));
