// Day 159: Task Scheduler Cooldown Idle
// Category: Heaps
// Time Complexity: O(n)
// Space Complexity: O(1)

export function leastInterval(tasks, n) { const map = {}; for (let t of tasks) map[t] = (map[t] || 0) + 1; const maxFreq = Math.max(...Object.values(map)); let maxCount = 0; for (let count of Object.values(map)) if (count === maxFreq) maxCount++; return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount); }
// Complexity verified: O(n) runtime, O(1) memory
