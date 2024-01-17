// Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
function check_all(arr, func = Boolean) {
    return arr.every(func);
}
console.log(check_all([4, 2, 3], (x) => x > 1));
console.log(check_all([4, 2, 3], (x) => x < 1));
console.log(check_all([1, 2, 3]));
