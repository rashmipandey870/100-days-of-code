// Day 109: Unique Paths in Grid
// Category: Dynamic Programming
// Time Complexity: O(m * n)
// Space Complexity: O(n)

export function uniquePaths(m, n) {
  const row = Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      row[j] += row[j - 1];
    }
  }
  return row[n - 1];
}
