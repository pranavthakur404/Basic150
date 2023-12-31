// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
function check_is_multiple(input) {
  return input % 3 == 0 || input % 7 == 0 ? true : false;
}
console.log(check_is_multiple(14));
