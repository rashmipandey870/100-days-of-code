// Day 129: Alien Dictionary Topological
// Category: Graphs
// Time Complexity: O(total characters)
// Space Complexity: O(unique characters)

export function alienOrder(words) { const adj = {}, inDegree = {}; for (let w of words) for (let c of w) { adj[c] = new Set(); inDegree[c] = 0; } for (let i = 0; i < words.length - 1; i++) { const w1 = words[i], w2 = words[i + 1]; const minLen = Math.min(w1.length, w2.length); if (w1.length > w2.length && w1.startsWith(w2)) return ""; for (let j = 0; j < minLen; j++) { if (w1[j] !== w2[j]) { if (!adj[w1[j]].has(w2[j])) { adj[w1[j]].add(w2[j]); inDegree[w2[j]]++; } break; } } } const q = Object.keys(inDegree).filter(c => inDegree[c] === 0); let res = ""; while (q.length) { const c = q.shift(); res += c; for (let neighbor of adj[c]) { inDegree[neighbor]--; if (inDegree[neighbor] === 0) q.push(neighbor); } } return res.length === Object.keys(inDegree).length ? res : ""; }
