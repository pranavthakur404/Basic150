// Write a JavaScript program to create a new string using the first and last n characters from a given string. The string length must be larger than or equal to n.
function newString(str, n) {
  if (str.length >= n) {
    return (
      str.split("").slice(0, n).join("") +
      str
        .split("")
        .slice(str.length - n)
        .join("")
    );
  }
}

console.log(newString("JavaScript", 2));
console.log(newString("JavaScript", 3));
