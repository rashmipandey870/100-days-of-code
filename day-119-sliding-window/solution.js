// Day 119: Find All Anagrams in a String
// Category: Sliding Window
// Time Complexity: O(n)
// Space Complexity: O(1)

export function findAnagrams(s, p) { const res = []; if (s.length < p.length) return res; const pCount = Array(26).fill(0), sCount = Array(26).fill(0), a = 'a'.charCodeAt(0); for (let i = 0; i < p.length; i++) { pCount[p.charCodeAt(i) - a]++; sCount[s.charCodeAt(i) - a]++; } if (pCount.every((v, i) => v === sCount[i])) res.push(0); for (let i = p.length; i < s.length; i++) { sCount[s.charCodeAt(i) - a]++; sCount[s.charCodeAt(i - p.length) - a]--; if (pCount.every((v, j) => v === sCount[j])) res.push(i - p.length + 1); } return res; }
// Complexity verified: O(n) runtime, O(1) memory
