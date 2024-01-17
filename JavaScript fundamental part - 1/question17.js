// Write a JavaScript program to split the values of two given arrays into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
function separate(arr, filter) {
  let result = [[], []];
  if (arr.length == filter.length) {
    arr.forEach((item, index) => {
      result[filter[index] ? 0 : 1].push(item);
    });
  }
  return result;
}

console.log(separate([1, 2, 3, 4], [true, true, false, true]));
console.log(separate([1, 2, 3, 4], [true, true, true, true]));
console.log(separate([1, 2, 3, 4], [false, false, false, false]));
