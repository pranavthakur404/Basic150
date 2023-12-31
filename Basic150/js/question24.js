// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.
function getString(str) {
  return str[0] + str.substring(0, str.length) + str[0];
}
console.log(getString("a"));
console.log(getString("ab"));
console.log(getString("abc"));
