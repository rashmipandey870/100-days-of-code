// Day 106: Set Matrix Zeroes
// Category: Matrix
// Time Complexity: O(m * n)
// Space Complexity: O(1)

export function setZeroes(matrix) {
  let firstRowHasZero = false, firstColHasZero = false;
  for (let i = 0; i < matrix.length; i++) if (matrix[i][0] === 0) firstColHasZero = true;
  for (let j = 0; j < matrix[0].length; j++) if (matrix[0][j] === 0) firstRowHasZero = true;
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }
  }
  if (firstColHasZero) for (let i = 0; i < matrix.length; i++) matrix[i][0] = 0;
  if (firstRowHasZero) for (let j = 0; j < matrix[0].length; j++) matrix[0][j] = 0;
  return matrix;
}
