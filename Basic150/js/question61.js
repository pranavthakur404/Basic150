// Write a JavaScript program to concatenate two strings except for their first character.
function concate_sting(str1, str2) {
  return (
    str1.split("").slice(1, str1.length).join("") +
    str2.split("").slice(1, str1.length).join("")
  );
}

console.log(concate_sting("PHP", "JS"));
console.log(concate_sting("A", "B"));
console.log(concate_sting("AA", "BB"));
