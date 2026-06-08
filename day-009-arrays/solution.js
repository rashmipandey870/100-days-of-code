// Day 9: Encode and Decode Strings
// Category: Arrays
// Time Complexity: O(n)
// Space Complexity: O(1)

function encode(strs) {
  return strs.map(s => s.length + '#' + s).join('');
}
function decode(str) {
  const res = [];
  let i = 0;
  while (i < str.length) {
    const hashIdx = str.indexOf('#', i);
    const len = parseInt(str.substring(i, hashIdx));
    res.push(str.substring(hashIdx + 1, hashIdx + 1 + len));
    i = hashIdx + 1 + len;
  }
  return res;
}
