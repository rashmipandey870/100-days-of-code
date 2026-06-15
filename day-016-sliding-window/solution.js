// Day 16: Longest Substring Without Repeating Characters
// Category: Sliding Window
// Time Complexity: O(n)
// Space Complexity: O(min(m, n))

function lengthOfLongestSubstring(s) {
  let max = 0, l = 0;
  const set = new Set();
  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    max = Math.max(max, r - l + 1);
  }
  return max;
}
