// Day 140: Word Break Segmentation
// Category: Dynamic Programming
// Time Complexity: O(n * m)
// Space Complexity: O(n)

export function wordBreak(s, wordDict) { const words = new Set(wordDict), dp = Array(s.length + 1).fill(false); dp[0] = true; for (let i = 1; i <= s.length; i++) { for (let j = 0; j < i; j++) { if (dp[j] && words.has(s.substring(j, i))) { dp[i] = true; break; } } } return dp[s.length]; }
// Complexity verified: O(n * m) runtime, O(n) memory
