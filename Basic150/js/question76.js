// Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.
function createNewArray(arr) {
  if (arr.length >= 1) {
    let newArr = [];
    newArr.push(arr[0]);
    newArr.push(arr[arr.length - 1]);
    return newArr;
  }
}
console.log(createNewArray([20, 20, 30]));
console.log(createNewArray([5, 2, 7, 8]));
console.log(createNewArray([17, 12, 34, 78]));
