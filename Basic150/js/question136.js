// JavaScript: Replace the first digit in a string (should contains at least digit) with $ character
// function replaceFirstDigit(str) {
//   str = str.split("");
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 0 && str[i] <= 9) {
//       str[i] = "$";
//     }
//   }
//   return str.join("");
// }

// anothe shortcut way
function replaceFirstDigit(str) {
  return str.replace(/[1-9]/, "$");
}

console.log(replaceFirstDigit("abc1dabc"));
console.log(replaceFirstDigit("p3ython"));
console.log(replaceFirstDigit("ab1cabc"));
