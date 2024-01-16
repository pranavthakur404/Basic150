// Write a JavaScript program to convert a given string's length to bytes.
function inByte(str) {
  return new Blob([str]).size;
}
console.log(inByte("123456"));
console.log(inByte("Hello World"));
console.log(inByte("Ã¢"));
