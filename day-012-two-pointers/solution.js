// Day 12: Two Sum II Sorted
// Category: Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)

function twoSumSorted(numbers, target) {
  let l = 0, r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1];
    if (sum < target) l++;
    else r--;
  }
  return [];
}
