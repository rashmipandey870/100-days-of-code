// Day 165: Partition Labels Substring Split
// Category: Greedy
// Time Complexity: O(n)
// Space Complexity: O(1)

export function partitionLabels(s) {
    const last = {};
    for (let i = 0; i < s.length; i++) last[s[i]] = i;
    const res = [];
    let size = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        size++;
        end = Math.max(end, last[s[i]]);
        if (i === end) {
            res.push(size);
            size = 0;
        }
    }
    return res;
}
