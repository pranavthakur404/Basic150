// Write a JavaScript program to capitalize the first letter of each word in a given string.
function capitalizeWord(str) {
  str = str.split("");
  let flag = false;
  for (let i = 0; i < str.length - 1; i++) {
    if (flag) {
      str[i] = str[i].toUpperCase();
      flag = false;
    }
    if (str[i].charCodeAt() == 32) {
      flag = true;
    }
  }
  str = str.join(" ");
  return str;
}
console.log(capitalizeWord("hey my name is pranav"));
