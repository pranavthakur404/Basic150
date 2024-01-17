// Write a JavaScript program to create an array out of the arrays by creating each possible pair from the arrays.
function possiblePair(arr1, arr2) {
  let result = [];
  arr1.forEach((item1) => {
    arr2.forEach((item2) => {
      result.push([item1, item2]);
    });
  });
  return result;
}
console.log(possiblePair([1, 2], ["a", "b"]));
console.log(possiblePair([1, 2], [1, 2]));
console.log(possiblePair(["a", "b"], ["a", "b"]));
