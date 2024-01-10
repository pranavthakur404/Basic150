// Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.
// For a string "2*0", the output should be : ["210", "240", "270"]
function findDivisible(str) {
  let hasPosition;
  let arr = [];
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "#") {
      hasPosition = i;
    }
  }
  for (let i = 0; i <= 9; i++) {
    str[hasPosition] = String(i);
    let newNum = Number(str.join(""));
    if (newNum % 3 == 0) {
      arr.push(String(newNum));
    }
  }
  return arr;
}

console.log(findDivisible("2#0"));
console.log(findDivisible("4#2"));
