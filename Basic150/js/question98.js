// Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case.
// // Fox example "Write" will be write and "PHp" will be "PHP"

function correctCase(str) {
  let upperCaseCount = 0;
  let lowerCaseCount = 0;
  for (let char of str) {
    if (char >= "a" && char <= "z") {
      lowerCaseCount += 1;
    } else if (char >= "A" && char <= "Z") {
      upperCaseCount += 1;
    }
  }
  if (lowerCaseCount > upperCaseCount) {
    str = str.toLowerCase();
  } else {
    str = str.toUpperCase();
  }
  return str;
}

console.log(correctCase("Write"));
console.log(correctCase("PHp"));
