// Write a JavaScript program to find the longest string from a given array of strings.
function longestString(arr) {
  let str = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (str.length < arr[i].length) {
      str = arr[i];
    }
  }
  return str;
}

console.log(longestString(["a", "aa", "aaa", "aaaaa", "aaaa"]));
