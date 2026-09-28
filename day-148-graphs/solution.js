// Day 148: Connected Components in Graph
// Category: Graphs
// Time Complexity: O(V + E)
// Space Complexity: O(V)

export function countComponents(n, edges) { const parent = Array.from({ length: n }, (_, i) => i); let count = n; function find(i) { while (parent[i] !== i) { parent[i] = parent[parent[i]]; i = parent[i]; } return i; } for (let [u, v] of edges) { const r1 = find(u), r2 = find(v); if (r1 !== r2) { parent[r1] = r2; count--; } } return count; }
