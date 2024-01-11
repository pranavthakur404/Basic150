// Write a JavaScript program to check whether a given fraction is proper or not.
// Note: There are two types of common fractions, proper or improper. When the numerator and the denominator are both positive, the fraction is called proper if the numerator is less than the denominator, and improper otherwise.
function checkFunction(arr) {
  if (arr[0] / arr[1] < 1) {
    return "Proper Fraction";
  }
  return "Improper fraction";
}
console.log(checkFunction([12, 300]));
console.log(checkFunction([2, 4]));
console.log(checkFunction([103, 3]));
console.log(checkFunction([104, 2]));
console.log(checkFunction([5, 40]));
