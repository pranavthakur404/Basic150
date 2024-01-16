// Write a JavaScript program to extract values at specified indexes from a specified array.
function filterByIndex(arr, indexes) {
  return arr.filter((li, index) => {
    return indexes.includes(index);
  });
}

let arra1 = ["a", "b", "c", "d", "e", "f"];
console.log(filterByIndex(arra1, [1, 3]));
let arra2 = [1, 2, 3, 4, 5, 6, 7];
console.log(filterByIndex(arra2, [4]));
