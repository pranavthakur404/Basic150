// Write a JavaScript program to filter out non-unique values in an array
function filterNonUniqueValue(arr) {
  //   return arr.filter((li) => {
  //     let count = 0;
  //     arr.forEach((data) => {
  //       if (li == data) {
  //         count += 1;
  //       }
  //     });
  //     if (count == 1) {
  //       return true;
  //     }
  //     return false;
  //   });
  return arr.filter((li) => {
    return arr.indexOf(li) === arr.lastIndexOf(li);
  });
}
console.log(filterNonUniqueValue([1, 2, 2, 3, 4, 4, 5]));
console.log(filterNonUniqueValue([1, 2, 3, 4]));
