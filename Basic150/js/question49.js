// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
function updateCar(str) {
  str = str.split("");
  for (let i = 0; i < str.length - 1; i++) {
    let num = str[i].charCodeAt();
    num = ++num;
    str[i] = String.fromCharCode(num);
  }
  str = str.join("");
  return str;
}
console.log(updateCar("python"));
