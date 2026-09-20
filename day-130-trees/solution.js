// Day 130: Binary Tree Zigzag Traversal
// Category: Trees
// Time Complexity: O(n)
// Space Complexity: O(n)

export function zigzagLevelOrder(root) { if (!root) return []; const res = [], q = [root]; let leftToRight = true; while (q.length) { const size = q.length, level = []; for (let i = 0; i < size; i++) { const node = q.shift(); if (leftToRight) level.push(node.val); else level.unshift(node.val); if (node.left) q.push(node.left); if (node.right) q.push(node.right); } res.push(level); leftToRight = !leftToRight; } return res; }
// Complexity verified: O(n) runtime, O(n) memory
