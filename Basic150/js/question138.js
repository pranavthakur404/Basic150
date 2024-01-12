// Write a JavaScript program to reverse the bits of a given 16-bit unsigned short integer.
function reverse16Bit(num) {
  num = num.toString(2);
  num = num.padStart(16, 0);
  num = num.split("").reverse("");
  num = num.join("");
  num = parseInt(num, 2);
  return num;
}
console.log(reverse16Bit(12345));
console.log(reverse16Bit(10));
console.log(reverse16Bit(5));
