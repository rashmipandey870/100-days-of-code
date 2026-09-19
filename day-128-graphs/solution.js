// Day 128: Cheapest Flights Within K Stops
// Category: Graphs
// Time Complexity: O(k * E)
// Space Complexity: O(n)

export function findCheapestPrice(n, flights, src, dst, k) { let prices = Array(n).fill(Infinity); prices[src] = 0; for (let i = 0; i <= k; i++) { const temp = [...prices]; for (let [u, v, w] of flights) { if (prices[u] !== Infinity && prices[u] + w < temp[v]) temp[v] = prices[u] + w; } prices = temp; } return prices[dst] === Infinity ? -1 : prices[dst]; }
// Complexity verified: O(k * E) runtime, O(n) memory
