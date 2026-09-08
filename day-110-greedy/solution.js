// Day 110: Maximum Subarray Kadane Algorithm
// Category: Greedy
// Time Complexity: O(n)
// Space Complexity: O(1)

export function maxSubArray(nums) {
  let maxSum = nums[0], currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
