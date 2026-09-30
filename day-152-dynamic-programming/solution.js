// Day 152: Palindromic Substrings Count
// Category: Dynamic Programming
// Time Complexity: O(n^2)
// Space Complexity: O(1)

export function countSubstrings(s) { let count = 0; function expand(l, r) { while (l >= 0 && r < s.length && s[l] === s[r]) { count++; l--; r++; } } for (let i = 0; i < s.length; i++) { expand(i, i); expand(i, i + 1); } return count; }
// Complexity verified: O(n^2) runtime, O(1) memory
