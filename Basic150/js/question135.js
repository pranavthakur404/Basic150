// Write a JavaScript program to remove all characters from a given string that appear more than once.
function removedoubleCharacter(str) {
  let newStr = [];
  let counter;
  for (let i = 0; i < str.length; i++) {
    counter = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] == str[i]) {
        counter += 1;
      }
    }
    if (counter == 1) {
      newStr.push(str[i]);
    }
  }
  return newStr.join("");
}
console.log(removedoubleCharacter("abcdabc"));
console.log(removedoubleCharacter("python"));
console.log(removedoubleCharacter("abcabc"));
console.log(removedoubleCharacter("1365451"));
