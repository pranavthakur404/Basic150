// Write a JavaScript program to check whether a given matrix is an identity matrix.
// Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix, of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.
// [[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
// [[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false
function isIdentityMatrix(matrix) {
  // checking square matrix of not
  for (let i = 0; i < matrix.length; i++) {
    let rows = matrix[i].length;
    let cols = matrix.length;
    if (rows !== cols) {
      return "Matrix is not square matrix";
    }
  }

  let x = 0;
  let flag = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (x == j) {
        if (matrix[i][j] !== 1) {
          flag = true;
          return false;
        }
      } else if (matrix[i][j] !== 0) {
        flag = true;
        return false;
      }
    }
    x += 1;
  }
  if (flag) {
    return false;
  }
  return true;
}

console.log(
  isIdentityMatrix([
    [1, 0, 0, 2],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  isIdentityMatrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
console.log(
  isIdentityMatrix([
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
  ])
);
