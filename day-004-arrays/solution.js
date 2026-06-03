// Day 4: Group Anagrams
// Category: Arrays
// Time Complexity: O(n * k log k)
// Space Complexity: O(n * k)

function groupAnagrams(strs) {
  const map = {};
  for (let s of strs) {
    const key = s.split('').sort().join('');
    if (!map[key]) map[key] = [];
    map[key].push(s);
  }
  return Object.values(map);
}
