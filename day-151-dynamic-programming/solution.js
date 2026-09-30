// Day 151: House Robber II Circle
// Category: Dynamic Programming
// Time Complexity: O(n)
// Space Complexity: O(1)

export function rob2(nums) { if (nums.length === 1) return nums[0]; function helper(arr) { let rob1 = 0, rob2 = 0; for (let n of arr) { const temp = Math.max(rob1 + n, rob2); rob1 = rob2; rob2 = temp; } return rob2; } return Math.max(helper(nums.slice(1)), helper(nums.slice(0, -1))); }
