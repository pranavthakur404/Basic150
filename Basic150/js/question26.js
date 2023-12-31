// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
function createNewString(str) {
  if (str.length >= 3) {
    let newStr =
      str.substr(str.length - 3, str.length) +
      str +
      str.substr(str.length - 3, str.length);
    return newStr;
  } else {
    console.log("String must be 3 or more than 3");
  }
}
console.log(createNewString("swift"));
