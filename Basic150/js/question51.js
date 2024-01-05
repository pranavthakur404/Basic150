// Write a JavaScript program to convert a given number into hours and minutes.
function convert_into_hour(num) {
  let hour = Math.floor(num / 60);
  let min = num % 60;
  return hour + ":" + min;
}
console.log(convert_into_hour(71));
console.log(convert_into_hour(450));
console.log(convert_into_hour(1441));
