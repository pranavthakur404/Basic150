// Write a JavaScript program to determine if two arrays of integers of the same length are similar. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.
function sortArray(arr) {
  let sortedArray = arr.sort((a, b) => {
    return a - b;
  });
  console.log(arr);
  return sortArray;
}
function isSimilar(arr1, arr2) {
  arr1 = sortArray(arr1);
  arr2 = sortArray(arr2);
  if (arr1.length == arr2.length) {
    let check = false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        check = true;
        break;
      }
    }
    if (check) {
      return false;
    }
    return true;
  } else {
    return false;
  }
}

// console.log(isSimilar([10, 20, 30], [10, 20, 30]));
console.log(isSimilar([10, 20, 30], [30, 10, 20]));
// console.log(isSimilar([10, 20, 30, 40], [10, 30, 20, 40]));
