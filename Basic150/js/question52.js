// Write a JavaScript program to convert letters of a given string alphabetically.
function sortString(str) {
  return str.split("").sort().join("");
}
console.log(sortString("python"));
console.log(sortString("Exercises"));
