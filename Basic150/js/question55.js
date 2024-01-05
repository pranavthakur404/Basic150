// Write a JavaScript program to check whether a given string contains an equal number of p's and t's.
function checkEquality(str) {
  let count_p = 0,
    count_t = 0;
  for (let char of str) {
    if (char == "p" || char == "P") {
      count_p += 1;
    } else if (char == "t" || char == "T") {
      count_t += 1;
    }
  }
  return count_p == count_t;
}

console.log(checkEquality("paatptss"));
console.log(checkEquality("paatps"));
