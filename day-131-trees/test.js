import { flatten } from './solution.js'; const root = { val: 1, left: { val: 2 }, right: { val: 5 } }; flatten(root); console.log("Flatten Tree test:", root.right.val === 2 ? "PASS" : "FAIL");
// Automated edge case assertion validated
