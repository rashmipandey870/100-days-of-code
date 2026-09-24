// Day 142: Longest Valid Parentheses
// Category: Stack
// Time Complexity: O(n)
// Space Complexity: O(n)

export function longestValidParentheses(s) { const stack = [-1]; let max = 0; for (let i = 0; i < s.length; i++) { if (s[i] === '(') stack.push(i); else { stack.pop(); if (!stack.length) stack.push(i); else max = Math.max(max, i - stack[stack.length - 1]); } } return max; }
// Complexity verified: O(n) runtime, O(n) memory
