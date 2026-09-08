// Day 111: Jump Game Array Reachability
// Category: Greedy
// Time Complexity: O(n)
// Space Complexity: O(1)

export function canJump(nums) {
  let goal = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= goal) goal = i;
  }
  return goal === 0;
}
