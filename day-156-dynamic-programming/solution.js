// Day 156: Longest Increasing Subsequence Patience
// Category: Dynamic Programming
// Time Complexity: O(n log n)
// Space Complexity: O(n)

export function lengthOfLIS(nums) { const tails = []; for (let x of nums) { let l = 0, r = tails.length; while (l < r) { const m = Math.floor((l + r) / 2); if (tails[m] < x) l = m + 1; else r = m; } tails[l] = x; } return tails.length; }
// Complexity verified: O(n log n) runtime, O(n) memory
