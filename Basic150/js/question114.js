// Write a JavaScript program to check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.)
function checkSentence(str) {
  const arrStr = str.split("");
  if (
    arrStr[0] >= "A" &&
    arrStr[0] <= "Z" &&
    arrStr[arrStr.length - 1] == "."
  ) {
    return true;
  }
  return false;
}

console.log(
    checkSentence(
    "This tool will help you write better English and efficiently corrects texts."
  )
);
console.log(
    checkSentence(
    "This tool will help you write better English and efficiently corrects texts"
  )
);
console.log(
    checkSentence(
    "this tool will help you write better English and efficiently corrects texts."
  )
);
