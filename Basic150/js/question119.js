// Write a JavaScript program to check if a given integer has an increasing digit sequence
function checkSeq(num) {
  num = String(num);
  num = num.split("");
  for (let i = 0; i < num.length; i++) {
    if (parseInt(num[i]) >= parseInt(num[i + 1])) {
      return false;
    }
  }
  return true;
}
console.log(checkSeq(123));
console.log(checkSeq(1223));
console.log(checkSeq(45677));
