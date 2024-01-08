// Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.
function createString(str) {
  if (
    str[0] == "p" ||
    (str[0] == "P" && str[str.length - 1] == "p") ||
    str[str.length - 1] == "P"
  ) {
    return str
      .split("")
      .slice(1, str.length - 1)
      .join("");
  } else if (str[0] == "p" || str[0] == "P") {
    return str.split("").slice(1).join("");
  } else if (str[str.length - 1 == "p"] || str[str.length - 1] == "p") {
    return str
      .split("")
      .slice(0, str.length - 1)
      .join("");
  }
  return str;
}

console.log(createString("PythonP"));
console.log(createString("Python"));
console.log(createString("JavaScript"));
