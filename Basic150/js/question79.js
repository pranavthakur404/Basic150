// Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.
function check_30_40(arr) {
  let a = 0,
    b = 0;
  if (arr.length < 3) {
    for (let n of arr) {
      if (n == 30) {
        a += 1;
      } else if (n == 40) {
        b += 1;
      }
    }
    if (a == 2 || b == 2) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(check_30_40([30, 30]));
console.log(check_30_40([40, 40]));
console.log(check_30_40([20, 20]));
console.log(check_30_40([30]));
