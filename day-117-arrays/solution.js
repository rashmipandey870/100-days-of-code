// Day 117: Continuous Subarray Sum
// Category: Arrays
// Time Complexity: O(n)
// Space Complexity: O(min(n, k))

export function checkSubarraySum(nums, k) { const map = new Map([[0, -1]]); let sum = 0; for (let i = 0; i < nums.length; i++) { sum += nums[i]; const rem = sum % k; if (map.has(rem)) { if (i - map.get(rem) > 1) return true; } else map.set(rem, i); } return false; }
// Complexity verified: O(n) runtime, O(min(n, k)) memory
