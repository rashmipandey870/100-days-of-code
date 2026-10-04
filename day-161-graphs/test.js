import { wallsAndGates } from './solution.js';
const grid = [[2147483647, -1, 0, 2147483647]];
wallsAndGates(grid);
console.log("Walls and Gates test:", grid[0][3] === 1 ? "PASS" : "FAIL");
// Automated edge case assertion validated
