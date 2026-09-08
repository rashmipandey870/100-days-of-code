// Day 113: Partition Equal Subset Sum
// Category: Dynamic Programming
// Time Complexity: O(n * sum)
// Space Complexity: O(sum)

export function canPartition(nums) {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 !== 0) return false;
  const target = sum / 2;
  const dp = Array(target + 1).fill(false);
  dp[0] = true;
  for (let n of nums) {
    for (let i = target; i >= n; i--) {
      dp[i] = dp[i] || dp[i - n];
    }
  }
  return dp[target];
}
