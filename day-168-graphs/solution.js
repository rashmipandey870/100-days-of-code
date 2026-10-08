// Day 168: Reconstruct Itinerary Eulerian Path
// Category: Graphs
// Time Complexity: O(E log E)
// Space Complexity: O(V + E)

export function findItinerary(tickets) {
    const adj = new Map();
    tickets.sort();
    for (const [src, dst] of tickets) {
        if (!adj.has(src)) adj.set(src, []);
        adj.get(src).push(dst);
    }
    const route = [];
    function dfs(airport) {
        const dests = adj.get(airport) || [];
        while (dests.length) {
            dfs(dests.shift());
        }
        route.push(airport);
    }
    dfs("JFK");
    return route.reverse();
}
