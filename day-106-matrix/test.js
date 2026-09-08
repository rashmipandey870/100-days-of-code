import { setZeroes } from './solution.js';
const mat = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(mat);
console.log("Set Zeroes test:", mat[0][1] === 0 && mat[1][1] === 0 ? "PASS" : "FAIL");
