// Day 161: Walls and Gates Multi-Source BFS
// Category: Graphs
// Time Complexity: O(m * n)
// Space Complexity: O(m * n)

export function wallsAndGates(rooms) {
    if (!rooms || !rooms.length) return rooms;
    const m = rooms.length, n = rooms[0].length;
    const q = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (rooms[r][c] === 0) q.push([r, c]);
        }
    }
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    while (q.length) {
        const [r, c] = q.shift();
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && rooms[nr][nc] === 2147483647) {
                rooms[nr][nc] = rooms[r][c] + 1;
                q.push([nr, nc]);
            }
        }
    }
    return rooms;
}
