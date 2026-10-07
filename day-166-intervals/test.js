import { minInterval } from './solution.js';
const ans = minInterval([[1,4],[2,4],[3,6],[4,4]], [2,3,4,5]);
console.log("Min Interval test:", ans[0] === 3 && ans[2] === 1 ? "PASS" : "FAIL");
// Automated edge case assertion validated
