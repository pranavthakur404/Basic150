// Write a JavaScript program to move the last three characters to the start of a given string. The string length must be greater than or equal to three.
function moveLastThreeChar(str) {
  let lastThreeChar = str
    .split("")
    .slice(str.length - 3, str.lenght)
    .join("");
  return lastThreeChar + str.slice(0, str.length - 3);
}

console.log(moveLastThreeChar("Python"));
console.log(moveLastThreeChar("JavaScript"));
console.log(moveLastThreeChar("Hi"));
