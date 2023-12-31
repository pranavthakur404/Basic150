// JavaScript: Check whether a string starts with 'Java' and false otherwise
function checkString(str) {
  if (str) {
    if (str.substring(0, 4) == "java" || str.substring(0, 4) == "JAVA" || str.substring(0, 4) == "Java") {
      return true;
    } else {
      return false;
    }
  }
}
console.log(checkString("Javascript"));
console.log(checkString("java"));
console.log(checkString("python"));
