// Day 143: Maximal Rectangle in Binary Matrix
// Category: Stack
// Time Complexity: O(m * n)
// Space Complexity: O(n)

export function maximalRectangle(matrix) { if (!matrix.length) return 0; const n = matrix[0].length, heights = Array(n).fill(0); let max = 0; for (let row of matrix) { for (let j = 0; j < n; j++) heights[j] = row[j] === '1' ? heights[j] + 1 : 0; const stack = []; for (let i = 0; i <= n; i++) { const h = i === n ? 0 : heights[i]; while (stack.length && heights[stack[stack.length - 1]] >= h) { const height = heights[stack.pop()]; const width = stack.length ? i - stack[stack.length - 1] - 1 : i; max = Math.max(max, height * width); } stack.push(i); } } return max; }
