// Day 114: Single Number Bitwise XOR
// Category: Bit Manipulation
// Time Complexity: O(n)
// Space Complexity: O(1)

export function singleNumber(nums) {
  return nums.reduce((acc, num) => acc ^ num, 0);
}
