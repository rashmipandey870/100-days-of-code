// Day 160: Course Schedule Cycle Detection
// Category: Graphs
// Time Complexity: O(V + E)
// Space Complexity: O(V + E)

export function canFinish(numCourses, prerequisites) { const adj = Array.from({ length: numCourses }, () => []), inDegree = Array(numCourses).fill(0); for (let [course, pre] of prerequisites) { adj[pre].push(course); inDegree[course]++; } const q = []; for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) q.push(i); let count = 0; while (q.length) { const node = q.shift(); count++; for (let next of adj[node]) { inDegree[next]--; if (inDegree[next] === 0) q.push(next); } } return count === numCourses; }
// Complexity verified: O(V + E) runtime, O(V + E) memory
