// Day 19: Minimum Window Substring
// Category: Sliding Window
// Time Complexity: O(m + n)
// Space Complexity: O(m + n)

function minWindow(s, t) {
  if (!s || !t) return "";
  const map = {};
  for (let c of t) map[c] = (map[c] || 0) + 1;
  let l = 0, r = 0, required = Object.keys(map).length, formed = 0;
  const windowCounts = {};
  let ans = [-1, 0, 0];
  while (r < s.length) {
    const c = s[r];
    windowCounts[c] = (windowCounts[c] || 0) + 1;
    if (map[c] && windowCounts[c] === map[c]) formed++;
    while (l <= r && formed === required) {
      if (ans[0] === -1 || r - l + 1 < ans[0]) ans = [r - l + 1, l, r];
      windowCounts[s[l]]--;
      if (map[s[l]] && windowCounts[s[l]] < map[s[l]]) formed--;
      l++;
    }
    r++;
  }
  return ans[0] === -1 ? "" : s.substring(ans[1], ans[2] + 1);
}
