// Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.
const extentTosix = function (arr) {
  let result = [];
  arr.split("").forEach((item) => {
    if (item !== "#") {
      result.push(item);
      result.push(item);
    }
  });
  result.unshift("#");
  return result.join("");
};
console.log(extentTosix("#03f"));
console.log(extentTosix("05a"));
