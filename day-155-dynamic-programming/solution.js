// Day 155: Max Product Subarray
// Category: Dynamic Programming
// Time Complexity: O(n)
// Space Complexity: O(1)

export function maxProduct(nums) { let res = Math.max(...nums), curMin = 1, curMax = 1; for (let n of nums) { const temp = curMax * n; curMax = Math.max(n * curMax, n * curMin, n); curMin = Math.min(temp, n * curMin, n); res = Math.max(res, curMax); } return res; }
