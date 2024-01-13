// Write a JavaScript program to change the capitalization of all letters in a given string.
function changeCaseofCharacter(str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      str[i] = str[i].toUpperCase();
    } else if (str[i] >= "A" && str[i] <= "Z") {
      str[i] = str[i].toLowerCase();
    }
  }
  return str.join("");
}
console.log(changeCaseofCharacter("w3resource"));
console.log(changeCaseofCharacter("Germany"));
