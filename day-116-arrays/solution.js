// Day 116: Subarray Sum Equals K
// Category: Arrays
// Time Complexity: O(n)
// Space Complexity: O(n)

export function subarraySum(nums, k) { const map = new Map([[0, 1]]); let sum = 0, count = 0; for (let n of nums) { sum += n; if (map.has(sum - k)) count += map.get(sum - k); map.set(sum, (map.get(sum) || 0) + 1); } return count; }
// Complexity verified: O(n) runtime, O(n) memory
