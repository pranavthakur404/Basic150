// Write a JavaScript program to divide a given array of positive integers into two parts. First element belongs to the first part, second element belongs to the second part, and third element belongs to the first part and so on. Now compute the sum of two parts and store it in an array of size two.
function sumOfArray(arr) {
  let newArr = [];
  let sum1 = 0;
  let sum2 = 0;
  let flag = true;
  for (let a of arr) {
    if (flag) {
      sum1 += a;
      flag = false;
    } else {
      sum2 += a;
      flag = true;
    }
  }
  newArr.push(sum1);
  newArr.push(sum2);
  return newArr;
}
console.log(sumOfArray([1, 3, 6, 2, 5, 10]));
