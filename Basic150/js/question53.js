// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
function checkSepration(str) {
  str = str.split("");
  let a, b;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == "a") {
      if (a == undefined) {
        a = i;
      }
    }
    if (str[i] == "b") {
      if (b == undefined) {
        b = i;
      }
    }
  }
  return Math.abs(a - b) == 4 ? true : false;
}

console.log(checkSepration("Chainsbreak"));
console.log(checkSepration("pane borrowed"));
console.log(checkSepration("abCheck"));
