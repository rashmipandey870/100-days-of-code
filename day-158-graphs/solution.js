// Day 158: Rotting Oranges Multi-Source BFS
// Category: Graphs
// Time Complexity: O(m * n)
// Space Complexity: O(m * n)

export function orangesRotting(grid) { const rows = grid.length, cols = grid[0].length, q = []; let fresh = 0, time = 0; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { if (grid[r][c] === 2) q.push([r, c]); else if (grid[r][c] === 1) fresh++; } while (q.length && fresh > 0) { const len = q.length; for (let i = 0; i < len; i++) { const [r, c] = q.shift(); for (let [dr, dc] of [[1,0],[-1,0],[0,1],[0,-1]]) { const nr = r + dr, nc = c + dc; if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) { grid[nr][nc] = 2; fresh--; q.push([nr, nc]); } } } time++; } return fresh === 0 ? time : -1; }
