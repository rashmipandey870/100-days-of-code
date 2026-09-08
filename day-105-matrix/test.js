import { spiralOrder } from './solution.js';
console.log("Spiral Matrix test:", JSON.stringify(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])) === JSON.stringify([1,2,3,6,9,8,7,4,5]) ? "PASS" : "FAIL");
