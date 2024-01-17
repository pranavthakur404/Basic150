// Write a JavaScript program to dcapitalize the first letter of a string.
function dcapitalize(str) {
  //   str = str.split("");
  //   str[0] = str[0].toLowerCase();
  //   return str.join("");
  return str[0].toLowerCase() + str.slice(1);
}
console.log(dcapitalize("W3resource"));
console.log(dcapitalize("Red"));
