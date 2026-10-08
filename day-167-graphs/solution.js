// Day 167: Swim in Rising Water Dijkstra
// Category: Graphs
// Time Complexity: O(n^2 log n)
// Space Complexity: O(n^2)

export function swimInWater(grid) {
    const n = grid.length;
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    const pq = [[grid[0][0], 0, 0]];
    visited[0][0] = true;
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    while (pq.length) {
        pq.sort((a, b) => a[0] - b[0]);
        const [t, r, c] = pq.shift();
        if (r === n - 1 && c === n - 1) return t;
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[nr][nc]) {
                visited[nr][nc] = true;
                pq.push([Math.max(t, grid[nr][nc]), nr, nc]);
            }
        }
    }
    return -1;
}
