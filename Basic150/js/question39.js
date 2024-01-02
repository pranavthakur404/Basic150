// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.
function computeNumber(num1, num2) {
  let sum = num1 + num2;
  if (sum >= 50 && sum <= 80) {
    return 65;
  }
  return 80;
}

console.log(computeNumber(30,20))
console.log(computeNumber(90,80))