// Write a JavaScript program to create a new string without the first and last characters of a given string.
function string_without_first_last_char(str) {
  return str
    .split("")
    .slice(1, str.length - 1)
    .join("");
}
console.log(string_without_first_last_char("JavaScript"));
console.log(string_without_first_last_char("JS"));
console.log(string_without_first_last_char("PHP"));
