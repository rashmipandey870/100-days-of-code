import { findItinerary } from './solution.js';
const res = findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]);
console.log("Reconstruct Itinerary test:", res[0] === "JFK" && res.length === 5 ? "PASS" : "FAIL");
// Automated edge case assertion validated
