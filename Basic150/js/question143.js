// Write a JavaScript program to sort the strings of a given array of strings in order of increasing length.
// Note: Do not change the order if the lengths of two string are same.
function sortInLength(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].length < arr[i].length) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
console.log(sortInLength(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"]));
