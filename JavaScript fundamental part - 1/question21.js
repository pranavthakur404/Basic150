// Write a JavaScript program to get every nth element in a given array.
function getEveryNthELement(arr, n) {
    return arr.filter((data, index) => {
      return index % n === n - 1;
    });
  }
  console.log(getEveryNthELement([1, 2, 3, 4, 5, 6], 1));
  console.log(getEveryNthELement([1, 2, 3, 4, 5, 6], 2));
  console.log(getEveryNthELement([1, 2, 3, 4, 5, 6], 3));
  console.log(getEveryNthELement([1, 2, 3, 4, 5, 6], 4));
  