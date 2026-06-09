// Day 10: Best Time to Buy and Sell Stock
// Category: Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let p of prices) {
    if (p < minPrice) minPrice = p;
    else if (p - minPrice > maxProfit) maxProfit = p - minPrice;
  }
  return maxProfit;
}
