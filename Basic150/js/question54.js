// Write a JavaScript program to count the number of vowels in a given string.
function count_vowels(str) {
  let count = 0;
  for (let char of str) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u" ||
      char == "A" ||
      char == "E" ||
      char == "I" ||
      char == "O" ||
      char == "U"
    ) {
      count += 1;
    }
  }
  return count;
}
console.log(count_vowels("Python"));
console.log(count_vowels("w3resource.com"));
