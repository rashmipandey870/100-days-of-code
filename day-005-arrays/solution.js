// Day 5: Top K Frequent Elements
// Category: Arrays
// Time Complexity: O(n log n)
// Space Complexity: O(n)

function topKFrequent(nums, k) {
  const map = new Map();
  for (let n of nums) map.set(n, (map.get(n) || 0) + 1);
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(entry => entry[0]);
}
