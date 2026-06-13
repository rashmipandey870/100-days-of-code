// Day 14: Container With Most Water
// Category: Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)

function maxArea(height) {
  let max = 0, l = 0, r = height.length - 1;
  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    max = Math.max(max, area);
    if (height[l] < height[r]) l++;
    else r--;
  }
  return max;
}
