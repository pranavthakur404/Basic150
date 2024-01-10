// Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right).
// Example:
// [1, 0, 0],
// [0, 2, 0],
// [0, 0, 3]]) = true
// // [1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false
function isDiagonal(matrix) {
  let x = 0;
  let flag = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (x == j) {
        if (matrix[i][x] == 0) {
          flag = true;
          return false;
        }
      } else if (matrix[i][j] !== 0) {
        flag = true;
        return false;
      }
    }
    x += 1;
    if (flag) {
      return false;
    }
  }
  if (flag) {
    return false;
  }
  return true;
}
console.log(
  isDiagonal([
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3],
  ])
);
console.log(
  isDiagonal([
    [1, 0, 0],
    [0, 2, 3],
    [0, 0, 3],
  ])
);
