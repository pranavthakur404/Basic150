// Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.
function isSameCaseAdjecent(str) {
  if ((str >= "a" && str <= "z") || (str >= "A" && str <= "z")) {
    let caseList = [];
    for (let i = 0; i <= str.length - 1; i++) {
      if (str[i] >= "A" && str[i] <= "Z") {
        caseList.push(true);
      } else if (str[i] >= "a" && str[i] <= "z") {
        caseList.push(false);
      }
    }
    for (let i = 0; i <= caseList.length - 1; i++) {
      if (caseList[i] == caseList[i + 1]) {
        return false;
      }
    }
    return true;
  } else {
    console.log("Not a latin word");
  }
}
console.log(isSameCaseAdjecent("xYr"));
console.log(isSameCaseAdjecent("XXyx"));
