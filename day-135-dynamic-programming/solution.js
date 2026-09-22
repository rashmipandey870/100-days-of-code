// Day 135: Target Sum Ways
// Category: Dynamic Programming
// Time Complexity: O(n * sum)
// Space Complexity: O(sum)

export function findTargetSumWays(nums, target) { const total = nums.reduce((a, b) => a + b, 0); if (Math.abs(target) > total || (total + target) % 2 !== 0) return 0; const s = (total + target) / 2; const dp = Array(s + 1).fill(0); dp[0] = 1; for (let n of nums) for (let j = s; j >= n; j--) dp[j] += dp[j - n]; return dp[s]; }
