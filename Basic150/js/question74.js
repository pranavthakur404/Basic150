// Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array.
function checkGreaterElement(arr) {
  if (arr.length > 1) {
    let greater = arr[0] > arr[arr.length - 1] ? arr[0] : arr[arr.length - 1];
    return arr.fill(greater, 0, arr.length);
  }
}
console.log(checkGreaterElement([20, 30, 40]));   
console.log(checkGreaterElement([-7, -9, 0]));    
console.log(checkGreaterElement([12, 10, 3]));     