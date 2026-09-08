import { insertInterval } from './solution.js';
const res = insertInterval([[1,3],[6,9]], [2,5]);
console.log("Insert Interval test:", JSON.stringify(res) === JSON.stringify([[1,5],[6,9]]) ? "PASS" : "FAIL");
