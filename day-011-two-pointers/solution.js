// Day 11: Valid Palindrome
// Category: Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)

function isPalindrome(s) {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let l = 0, r = cleaned.length - 1;
  while (l < r) {
    if (cleaned[l] !== cleaned[r]) return false;
    l++;
    r--;
  }
  return true;
}
