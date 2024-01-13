// Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer.
function sumOfCubeN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i * i * i;
  }
  return sum;
}

console.log(sumOfCubeN(3)); 
console.log(sumOfCubeN(4)); 