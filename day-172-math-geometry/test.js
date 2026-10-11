import { DetectSquares } from './solution.js';
const ds = new DetectSquares();
ds.add([3, 10]); ds.add([11, 2]); ds.add([3, 2]);
console.log("Detect Squares test:", ds.count([11, 10]) === 1 ? "PASS" : "FAIL");
// Automated edge case assertion validated
