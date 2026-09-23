// Day 138: Burst Balloons Matrix DP
// Category: Dynamic Programming
// Time Complexity: O(n^3)
// Space Complexity: O(n^2)

export function maxCoins(nums) { const n = nums.length, val = [1, ...nums, 1], dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0)); for (let len = 1; len <= n; len++) { for (let l = 1; l <= n - len + 1; l++) { const r = l + len - 1; for (let k = l; k <= r; k++) { dp[l][r] = Math.max(dp[l][r], val[l - 1] * val[k] * val[r + 1] + dp[l][k - 1] + dp[k + 1][r]); } } } return dp[1][n]; }
