// Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.  /
function checkLargestInGivenRange(num1, num2) {
  if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
    if (num1 == num2) {
      console.log("Both are same");
    } else if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  } else {
    return "Numbers are not in range !!";
  }
}
console.log(checkLargestInGivenRange(45, 60));
console.log(checkLargestInGivenRange(25, 60));
console.log(checkLargestInGivenRange(45, 80));
