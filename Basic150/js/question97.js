// Write a JavaScript program to find the shortest possible string. This can be converted into a string and converted into a palindrome by adding characters to the end of it.
function createPalindrom(str) {
  str = str.split("");
  let reapetedCharIndex;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[str.length - 1] == str[i]) {
      reapetedCharIndex = i;
    }
  }
  for (let i = reapetedCharIndex - 1; i >= 0; i--) {
    str.push(str[i]);
  }
  return str.join("");
}

console.log(createPalindrom("abcddc")); // Output the result for the given string
console.log(createPalindrom("122"));
