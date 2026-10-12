// Day 175: Critical Connections in a Network Tarjan Bridges
// Category: Graphs
// Time Complexity: O(V + E)
// Space Complexity: O(V + E)

export function criticalConnections(n, connections) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of connections) {
        adj[u].push(v);
        adj[v].push(u);
    }
    const disc = new Array(n).fill(-1);
    const low = new Array(n).fill(-1);
    const bridges = [];
    let time = 0;
    function dfs(u, parent) {
        disc[u] = low[u] = time++;
        for (const v of adj[u]) {
            if (v === parent) continue;
            if (disc[v] === -1) {
                dfs(v, u);
                low[u] = Math.min(low[u], low[v]);
                if (low[v] > disc[u]) bridges.push([u, v]);
            } else {
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }
    dfs(0, -1);
    return bridges;
}
