// Day 134: Maximum Width of Binary Tree
// Category: Trees
// Time Complexity: O(n)
// Space Complexity: O(n)

export function widthOfBinaryTree(root) { if (!root) return 0; let maxWidth = 0n; const q = [[root, 0n]]; while (q.length) { const size = q.length; const minIndex = q[0][1]; let first = 0n, last = 0n; for (let i = 0; i < size; i++) { const [node, index] = q.shift(); const curIndex = index - minIndex; if (i === 0) first = curIndex; if (i === size - 1) last = curIndex; if (node.left) q.push([node.left, 2n * curIndex]); if (node.right) q.push([node.right, 2n * curIndex + 1n]); } const width = last - first + 1n; if (width > maxWidth) maxWidth = width; } return Number(maxWidth); }
