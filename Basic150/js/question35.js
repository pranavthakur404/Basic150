// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.
function checkString(str, char) {
  if (str.length >= 5) {
    return str[1] == char || char[3] == char ? true : false;
  } else {
    return "String is small";
  }
}
console.log(checkString("Python", "y"));
console.log(checkString("JavaScript", "a"));
console.log(checkString("Console", "o"));
console.log(checkString("Console", "c"));
console.log(checkString("Console", "e"));
console.log(checkString("JavaScript", "S"));
