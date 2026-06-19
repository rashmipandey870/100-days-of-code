import { maxSlidingWindow } from './solution.js';

console.log("Sliding Window Max test:", JSON.stringify(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)) === JSON.stringify([3,3,5,5,6,7]) ? "PASS" : "FAIL");
