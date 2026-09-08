import { rotateMatrix } from './solution.js';
const mat = [[1,2,3],[4,5,6],[7,8,9]];
rotateMatrix(mat);
console.log("Rotate Matrix test:", mat[0][0] === 7 && mat[0][2] === 1 ? "PASS" : "FAIL");
