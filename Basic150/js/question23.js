// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.
function swapCharPosition(str) {
  if (str.length >= 1) {
    if (str.length == 1) {
      return str;
    } else {
      let arr = str.split("");
      let temp = arr[0];
      arr[0] = arr[arr.length - 1];
      arr[arr.length - 1] = temp;
      str = arr.join("");
      return str;
    }
  }
}
console.log(swapCharPosition("p"));
