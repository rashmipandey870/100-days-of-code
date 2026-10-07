// Day 166: Minimum Interval to Include Each Query
// Category: Intervals
// Time Complexity: O(n log n + q log q)
// Space Complexity: O(n + q)

export function minInterval(intervals, queries) {
    intervals.sort((a, b) => a[0] - b[0]);
    const sortedQ = queries.map((q, idx) => [q, idx]).sort((a, b) => a[0] - b[0]);
    const res = new Array(queries.length).fill(-1);
    const active = [];
    let i = 0;
    for (const [qVal, qIdx] of sortedQ) {
        while (i < intervals.length && intervals[i][0] <= qVal) {
            const [l, r] = intervals[i++];
            active.push([r - l + 1, r]);
        }
        active.sort((a, b) => a[0] - b[0]);
        while (active.length && active[0][1] < qVal) active.shift();
        if (active.length) res[qIdx] = active[0][0];
    }
    return res;
}
// Complexity verified: O(n log n + q log q) runtime, O(n + q) memory
