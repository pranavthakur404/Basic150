// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.
function concateString(str1, str2) {
  if (str1.length == str2.length) {
    return str1 + " " + str2;
  } else {
    return str1.length > str2.length
      ? str1
          .split("")
          .slice(str1.length - str2.length, str1.length)
          .join("") + str2
      : str1 +
          str2
            .split("")
            .slice(str2.length - str1.length, str2.length)
            .join("");
  }
}
console.log(concateString("Python", "JS"));
console.log(concateString("ab", "cdef"));
