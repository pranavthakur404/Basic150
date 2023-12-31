// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.
function addString(str) {
  if ((str[0] == "p" && str[1] == "y") || (str[0] == "P" && str[1] == "Y")) {
    return str;
  } else {
    str = str.toLowerCase();
    return "py" + str;
  }
}

console.log(addString("THON"));
console.log(addString("python"));
