// Write a JavaScript program to extract the first half of a even string.
function extract_first_half(str) {
  if (str.length % 2 == 0) {
    return str
      .split("")
      .slice(0, str.length / 2)
      .join("");
  } else if (str.length == 3) {
    return str;
  } else {
    return "String is not Even";
  }
}

console.log(extract_first_half("Python"));
console.log(extract_first_half("JavaScript"));
console.log(extract_first_half("PHP"));
