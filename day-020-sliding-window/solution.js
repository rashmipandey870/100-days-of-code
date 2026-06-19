// Day 20: Sliding Window Maximum
// Category: Sliding Window
// Time Complexity: O(n)
// Space Complexity: O(k)

function maxSlidingWindow(nums, k) {
  const q = [], res = [];
  for (let i = 0; i < nums.length; i++) {
    while (q.length && nums[q[q.length - 1]] <= nums[i]) q.pop();
    q.push(i);
    if (q[0] === i - k) q.shift();
    if (i >= k - 1) res.push(nums[q[0]]);
  }
  return res;
}
