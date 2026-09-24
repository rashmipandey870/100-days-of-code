// Day 141: Minimum Cost For Tickets
// Category: Dynamic Programming
// Time Complexity: O(days)
// Space Complexity: O(days)

export function mincostTickets(days, costs) { const daySet = new Set(days), lastDay = days[days.length - 1], dp = Array(lastDay + 1).fill(0); for (let i = 1; i <= lastDay; i++) { if (!daySet.has(i)) { dp[i] = dp[i - 1]; continue; } dp[i] = Math.min(dp[i - 1] + costs[0], dp[Math.max(0, i - 7)] + costs[1], dp[Math.max(0, i - 30)] + costs[2]); } return dp[lastDay]; }
