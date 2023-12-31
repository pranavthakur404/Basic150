// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
function removeCharacter(str, position) {
  if (position >= 0 && position <= str.length - 1) {
    let arr = str.split("");
    arr = arr.filter((char, index) => {
      return index !== position;
    });
    str = arr.join("");
    return str;
  } else {
    console.log("position number is wrong !!");
  }
}
console.log(removeCharacter("pranav", 2));
