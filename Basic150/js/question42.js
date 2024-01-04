// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
function checkStrictOrSoftMode(x, y, z) {
  if (y > x && z > y) {
    return "Strict Mode";
  } else if (z > y) {
    return "Soft Mode";
  } else {
    return undefined;
  }
}
console.log(checkStrictOrSoftMode(10, 15, 31));
console.log(checkStrictOrSoftMode(24, 22, 31));
console.log(checkStrictOrSoftMode(50, 21, 15));
