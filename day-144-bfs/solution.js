// Day 144: Sliding Puzzle Shortest Moves
// Category: BFS
// Time Complexity: O((m * n)!)
// Space Complexity: O((m * n)!)

export function slidingPuzzle(board) { const target = "123450", start = board.flat().join(''), neighbors = [[1,3],[0,2,4],[1,5],[0,4],[1,3,5],[2,4]]; const q = [[start, 0]], visited = new Set([start]); while (q.length) { const [curr, steps] = q.shift(); if (curr === target) return steps; const zeroIdx = curr.indexOf('0'); for (let next of neighbors[zeroIdx]) { const arr = curr.split(''); [arr[zeroIdx], arr[next]] = [arr[next], arr[zeroIdx]]; const nextState = arr.join(''); if (!visited.has(nextState)) { visited.add(nextState); q.push([nextState, steps + 1]); } } } return -1; }
// Complexity verified: O((m * n)!) runtime, O((m * n)!) memory
