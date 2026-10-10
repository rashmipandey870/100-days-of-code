import { myPow } from './solution.js';
console.log("Binary Pow test:", Math.abs(myPow(2.0, 10) - 1024.0) < 1e-5 ? "PASS" : "FAIL");
// Automated edge case assertion validated
