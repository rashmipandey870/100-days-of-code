// Day 150: Palindrome Partitioning DFS
// Category: Backtracking
// Time Complexity: O(n * 2^n)
// Space Complexity: O(n)

export function partition(s) { const res = [], path = []; function isPal(l, r) { while (l < r) if (s[l++] !== s[r--]) return false; return true; } function dfs(start) { if (start === s.length) { res.push([...path]); return; } for (let end = start; end < s.length; end++) { if (isPal(start, end)) { path.push(s.slice(start, end + 1)); dfs(end + 1); path.pop(); } } } dfs(0); return res; }
// Complexity verified: O(n * 2^n) runtime, O(n) memory
