// Day 147: Graph Valid Tree Cycle Detection
// Category: Graphs
// Time Complexity: O(V + E)
// Space Complexity: O(V)

export function validTree(n, edges) { if (edges.length !== n - 1) return false; const parent = Array.from({ length: n }, (_, i) => i); function find(i) { if (parent[i] === i) return i; return parent[i] = find(parent[i]); } for (let [u, v] of edges) { const r1 = find(u), r2 = find(v); if (r1 === r2) return false; parent[r1] = r2; } return true; }
