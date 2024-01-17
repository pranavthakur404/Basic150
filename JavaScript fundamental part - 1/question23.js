// Write a JavaScript program to filter out non-unique values in an array, based on a provided comparator function.
const filter_Non_UniqueBy = (arr, func) => {
  return arr.filter((li) => {
    let counter = 0;
    arr.forEach((data) => {
      func(li, data) ? (counter += 1) : null;
    });
    if (counter == 1) {
      return true;
    }
    return false;
  });
};

console.log(
  filter_Non_UniqueBy(
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
      { id: 1, value: "d" },
      { id: 0, value: "e" },
    ],
    (a, b) => a.id == b.id
  )
);
