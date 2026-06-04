import { topKFrequent } from './solution.js';

console.log("Top K Frequent test:", JSON.stringify(topKFrequent([1,1,1,2,2,3], 2)) === JSON.stringify([1,2]) ? "PASS" : "FAIL");

// Validated on Node runtime