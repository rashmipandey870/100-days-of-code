import { mergeIntervals } from './solution.js';
const res = mergeIntervals([[1,3],[2,6],[8,10],[15,18]]);
console.log("Merge Intervals test:", JSON.stringify(res) === JSON.stringify([[1,6],[8,10],[15,18]]) ? "PASS" : "FAIL");
