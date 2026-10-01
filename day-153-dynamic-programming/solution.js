// Day 153: Decode Ways Combinations
// Category: Dynamic Programming
// Time Complexity: O(n)
// Space Complexity: O(1)

export function numDecodings(s) { if (!s || s[0] === '0') return 0; let dp1 = 1, dp2 = 1; for (let i = 1; i < s.length; i++) { let current = 0; if (s[i] !== '0') current += dp1; const two = parseInt(s.slice(i - 1, i + 1)); if (two >= 10 && two <= 26) current += dp2; dp2 = dp1; dp1 = current; } return dp1; }
