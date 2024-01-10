// Write a JavaScript program to find the longest string in a given array.
function findLongestString(arr) {
  let longStr = arr[0];
  for (let str of arr) {
    if (str.length > longStr.length) {
      longStr = str;
    }
  }
  return longStr;
}
console.log(findLongestString(["ab", "a", "abcd"]));
console.log(findLongestString(["ab", "ab", "ab"]));
