import { criticalConnections } from './solution.js';
const out = criticalConnections(4, [[0,1],[1,2],[2,0],[1,3]]);
console.log("Tarjan Bridges test:", out.length === 1 && out[0].includes(3) ? "PASS" : "FAIL");
// Automated edge case assertion validated
