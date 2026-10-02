// Day 157: Find Median from Data Stream Two Heaps
// Category: Heaps
// Time Complexity: O(log n)
// Space Complexity: O(n)

export class MedianFinder { constructor() { this.nums = []; } addNum(num) { let l = 0, r = this.nums.length; while (l < r) { const m = Math.floor((l + r) / 2); if (this.nums[m] < num) l = m + 1; else r = m; } this.nums.splice(l, 0, num); } findMedian() { const mid = Math.floor(this.nums.length / 2); return this.nums.length % 2 !== 0 ? this.nums[mid] : (this.nums[mid - 1] + this.nums[mid]) / 2; } }
// Complexity verified: O(log n) runtime, O(n) memory
