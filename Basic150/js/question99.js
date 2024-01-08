// Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string.
function isEqualPossible(str1, str2) {
  if (str1.length == str2.length) {
    for (let char of str1) {
      if (!str2.includes(char)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
console.log(isEqualPossible("xyz", "zyx"));
console.log(isEqualPossible("xyz", "zyp"));
