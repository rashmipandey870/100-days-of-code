// Day 133: Construct Tree Inorder Postorder
// Category: Trees
// Time Complexity: O(n)
// Space Complexity: O(n)

export function buildTree(inorder, postorder) { const map = new Map(); inorder.forEach((v, i) => map.set(v, i)); function helper(inStart, inEnd, postStart, postEnd) { if (inStart > inEnd || postStart > postEnd) return null; const rootVal = postorder[postEnd]; const root = { val: rootVal, left: null, right: null }; const inRoot = map.get(rootVal); const numsLeft = inRoot - inStart; root.left = helper(inStart, inRoot - 1, postStart, postStart + numsLeft - 1); root.right = helper(inRoot + 1, inEnd, postStart + numsLeft, postEnd - 1); return root; } return helper(0, inorder.length - 1, 0, postorder.length - 1); }
// Complexity verified: O(n) runtime, O(n) memory
