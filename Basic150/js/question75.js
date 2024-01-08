// // Write a JavaScript program to create an array taking the middle elements of the two arrays of integer and each length 3.
function arrOfMiddle(arr1, arr2) {
  if (arr1.length == 3 && arr2.length == 3) {
    let newArr = [];
    newArr.push(arr1[Math.floor(arr1.length / 2)]);
    newArr.push(arr2[Math.floor(arr2.length / 2)]);
    return newArr;
  }
}
console.log(arrOfMiddle([1, 2, 3], [1, 5, 6]));
console.log(arrOfMiddle([3, 3, 3], [2, 8, 0]));
console.log(arrOfMiddle([4, 2, 7], [2, 4, 5]));
