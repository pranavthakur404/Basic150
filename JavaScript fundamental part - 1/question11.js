// Write a JavaScript program to generate a random hexadecimal color code.
function hexDecimalColorCode() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
}
console.log(hexDecimalColorCode());
