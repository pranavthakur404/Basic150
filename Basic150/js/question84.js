// Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
// // Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
function replaceByNextAlphabet(str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "z") {
      str[i] = "a";
    } else {
      let code = str[i].charCodeAt() + 1;
      str[i] = String.fromCharCode(code);
    }
  }
  return str.join("");
}

console.log(replaceByNextAlphabet("abcdxyz"));
