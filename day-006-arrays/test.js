import { productExceptSelf } from './solution.js';

console.log("Product Except Self test:", JSON.stringify(productExceptSelf([1,2,3,4])) === JSON.stringify([24,12,8,6]) ? "PASS" : "FAIL");

// Validated on Node runtime