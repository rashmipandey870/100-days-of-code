// Day 115: Counting Bits Hamming Weight
// Category: Bit Manipulation
// Time Complexity: O(n)
// Space Complexity: O(n)

export function countBits(n) {
  const ans = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }
  return ans;
}
