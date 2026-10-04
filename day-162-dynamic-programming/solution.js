// Day 162: Best Time to Buy and Sell Stock with Cooldown
// Category: Dynamic Programming
// Time Complexity: O(n)
// Space Complexity: O(1)

export function maxProfitWithCooldown(prices) {
    let sold = 0, hold = -Infinity, rest = 0;
    for (const p of prices) {
        const prevSold = sold;
        sold = hold + p;
        hold = Math.max(hold, rest - p);
        rest = Math.max(rest, prevSold);
    }
    return Math.max(sold, rest);
}
