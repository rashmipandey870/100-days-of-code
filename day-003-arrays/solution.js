// Day 3: Contains Duplicate
// Category: Arrays
// Time Complexity: O(n)
// Space Complexity: O(n)

function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}
