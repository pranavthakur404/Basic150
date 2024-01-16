// Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.
function filterValue(arr, ...args) {
  return arr.filter((li) => {
    return !args.includes(li);
  });
}

let arra1 = ["a", "b", "c", "a", "b", "c"];
console.log(filterValue(arra1, "a", "c"));
let arra2 = ["a", "b", "c", "a", "b", "c"];
console.log(filterValue(arra2, "b"));
