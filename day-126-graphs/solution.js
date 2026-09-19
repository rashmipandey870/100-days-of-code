// Day 126: Network Delay Time Dijkstra
// Category: Graphs
// Time Complexity: O((V + E) log V)
// Space Complexity: O(V + E)

export function networkDelayTime(times, n, k) { const adj = Array.from({ length: n + 1 }, () => []); for (let [u, v, w] of times) adj[u].push([v, w]); const dist = Array(n + 1).fill(Infinity); dist[k] = 0; const q = [[0, k]]; while (q.length) { q.sort((a, b) => a[0] - b[0]); const [d, u] = q.shift(); if (d > dist[u]) continue; for (let [v, w] of adj[u]) { if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; q.push([dist[v], v]); } } } let max = 0; for (let i = 1; i <= n; i++) { if (dist[i] === Infinity) return -1; max = Math.max(max, dist[i]); } return max; }
