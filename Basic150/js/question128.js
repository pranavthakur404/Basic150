// Write a JavaScript program to find the smallest round number not less than a given value.
// Note: A round number is informally considered to be an integer that ends with one or more zeros.[3] So, 590 is rounder than 592, but 590 is less round than 600.
function getRounder(num) {
  while (num % 10) {
    num++;
  }
  return num;
}

console.log(getRounder(56));
console.log(getRounder(592));
