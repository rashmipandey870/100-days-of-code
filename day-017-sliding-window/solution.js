// Day 17: Longest Repeating Character Replacement
// Category: Sliding Window
// Time Complexity: O(n)
// Space Complexity: O(1)

function characterReplacement(s, k) {
  const map = {};
  let maxCount = 0, maxLength = 0, l = 0;
  for (let r = 0; r < s.length; r++) {
    map[s[r]] = (map[s[r]] || 0) + 1;
    maxCount = Math.max(maxCount, map[s[r]]);
    if (r - l + 1 - maxCount > k) {
      map[s[l]]--;
      l++;
    }
    maxLength = Math.max(maxLength, r - l + 1);
  }
  return maxLength;
}
