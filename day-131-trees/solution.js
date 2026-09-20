// Day 131: Flatten Binary Tree to Linked List
// Category: Trees
// Time Complexity: O(n)
// Space Complexity: O(1)

export function flatten(root) { let curr = root; while (curr) { if (curr.left) { let rightmost = curr.left; while (rightmost.right) rightmost = rightmost.right; rightmost.right = curr.right; curr.right = curr.left; curr.left = null; } curr = curr.right; } return root; }
// Complexity verified: O(n) runtime, O(1) memory
