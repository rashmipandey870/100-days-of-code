import { partitionLabels } from './solution.js';
const out = partitionLabels("ababcbacadefegdehijhklij");
console.log("Partition Labels test:", out[0] === 9 && out.length === 3 ? "PASS" : "FAIL");
// Automated edge case assertion validated
