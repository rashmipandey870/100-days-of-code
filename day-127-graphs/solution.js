// Day 127: Min Cost to Connect Points Prim
// Category: Graphs
// Time Complexity: O(n^2)
// Space Complexity: O(n)

export function minCostConnectPoints(points) { const n = points.length, visited = Array(n).fill(false), minDist = Array(n).fill(Infinity); minDist[0] = 0; let totalCost = 0; for (let step = 0; step < n; step++) { let curr = -1; for (let i = 0; i < n; i++) { if (!visited[i] && (curr === -1 || minDist[i] < minDist[curr])) curr = i; } visited[curr] = true; totalCost += minDist[curr]; for (let next = 0; next < n; next++) { if (!visited[next]) { const dist = Math.abs(points[curr][0] - points[next][0]) + Math.abs(points[curr][1] - points[next][1]); minDist[next] = Math.min(minDist[next], dist); } } } return totalCost; }
