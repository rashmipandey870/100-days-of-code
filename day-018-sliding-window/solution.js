// Day 18: Permutation in String
// Category: Sliding Window
// Time Complexity: O(n)
// Space Complexity: O(1)

function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;
  const count1 = Array(26).fill(0), count2 = Array(26).fill(0);
  const aCode = 'a'.charCodeAt(0);
  for (let i = 0; i < s1.length; i++) {
    count1[s1.charCodeAt(i) - aCode]++;
    count2[s2.charCodeAt(i) - aCode]++;
  }
  for (let i = 0; i < s2.length - s1.length; i++) {
    if (count1.every((val, idx) => val === count2[idx])) return true;
    count2[s2.charCodeAt(i + s1.length) - aCode]++;
    count2[s2.charCodeAt(i) - aCode]--;
  }
  return count1.every((val, idx) => val === count2[idx]);
}
