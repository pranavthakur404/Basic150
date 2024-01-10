// Write a JavaScript program to check whether a given matrix is lower triangular or not.
// Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.
function isLowerTriangularMatrix(matrix) {
  let x = 0;
  let flag = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j > x) {
        if (matrix[i][j] !== 0) {
          flag = true;
          return false;
        }
      }
    }
    x += 1;
  }
  if (flag) {
    return false;
  } else {
    return true;
  }
}

console.log(
    isLowerTriangularMatrix([
    [1, 0, 0],
    [2, 0, 0],
    [0, 3, 3],
  ])
);
console.log(
    isLowerTriangularMatrix([
    [1, 0, 1],
    [2, 0, 0],
    [0, 3, 3],
  ])
);
