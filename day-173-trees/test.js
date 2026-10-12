import { minCameraCover } from './solution.js';
const tree = { val: 0, left: { val: 0, left: { val: 0 }, right: { val: 0 } }, right: null };
console.log("Binary Tree Cameras test:", minCameraCover(tree) === 1 ? "PASS" : "FAIL");
// Automated edge case assertion validated
