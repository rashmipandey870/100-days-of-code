// Day 154: Coin Change Min Coins
// Category: Dynamic Programming
// Time Complexity: O(amount * coins)
// Space Complexity: O(amount)

export function coinChange(coins, amount) { const dp = Array(amount + 1).fill(Infinity); dp[0] = 0; for (let i = 1; i <= amount; i++) { for (let c of coins) if (i - c >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - c]); } return dp[amount] === Infinity ? -1 : dp[amount]; }
