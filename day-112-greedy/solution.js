// Day 112: Gas Station Circular Tour
// Category: Greedy
// Time Complexity: O(n)
// Space Complexity: O(1)

export function canCompleteCircuit(gas, cost) {
  let totalGas = 0, totalCost = 0;
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
  }
  if (totalGas < totalCost) return -1;
  let currentTank = 0, startIndex = 0;
  for (let i = 0; i < gas.length; i++) {
    currentTank += gas[i] - cost[i];
    if (currentTank < 0) {
      startIndex = i + 1;
      currentTank = 0;
    }
  }
  return startIndex;
}
