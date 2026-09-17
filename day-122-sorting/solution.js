// Day 122: Sort Colors Dutch Flag
// Category: Sorting
// Time Complexity: O(n)
// Space Complexity: O(1)

export function sortColors(nums) { let l = 0, curr = 0, r = nums.length - 1; while (curr <= r) { if (nums[curr] === 0) { [nums[l], nums[curr]] = [nums[curr], nums[l]]; l++; curr++; } else if (nums[curr] === 2) { [nums[curr], nums[r]] = [nums[r], nums[curr]]; r--; } else curr++; } return nums; }
// Complexity verified: O(n) runtime, O(1) memory
