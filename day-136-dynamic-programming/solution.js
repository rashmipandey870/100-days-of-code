// Day 136: Interleaving String DP
// Category: Dynamic Programming
// Time Complexity: O(m * n)
// Space Complexity: O(n)

export function isInterleave(s1, s2, s3) { if (s1.length + s2.length !== s3.length) return false; const dp = Array(s2.length + 1).fill(false); dp[0] = true; for (let j = 1; j <= s2.length; j++) dp[j] = dp[j - 1] && s2[j - 1] === s3[j - 1]; for (let i = 1; i <= s1.length; i++) { dp[0] = dp[0] && s1[i - 1] === s3[i - 1]; for (let j = 1; j <= s2.length; j++) { dp[j] = (dp[j] && s1[i - 1] === s3[i + j - 1]) || (dp[j - 1] && s2[j - 1] === s3[i + j - 1]); } } return dp[s2.length]; }
