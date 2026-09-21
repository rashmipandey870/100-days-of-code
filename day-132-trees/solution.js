// Day 132: Populate Next Right Pointers
// Category: Trees
// Time Complexity: O(n)
// Space Complexity: O(1)

export function connect(root) { if (!root) return null; let leftmost = root; while (leftmost.left) { let head = leftmost; while (head) { head.left.next = head.right; if (head.next) head.right.next = head.next.left; head = head.next; } leftmost = leftmost.left; } return root; }
