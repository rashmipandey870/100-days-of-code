// Day 174: Shortest Common Supersequence
// Category: Dynamic Programming
// Time Complexity: O(m * n)
// Space Complexity: O(m * n)

export function shortestCommonSupersequence(str1, str2) {
    const m = str1.length, n = str2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = str1[i - 1] === str2[j - 1]
                ? 1 + dp[i - 1][j - 1]
                : Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    let i = m, j = n, res = [];
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            res.push(str1[i - 1]);
            i--; j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            res.push(str1[i - 1]);
            i--;
        } else {
            res.push(str2[j - 1]);
            j--;
        }
    }
    while (i > 0) res.push(str1[--i]);
    while (j > 0) res.push(str2[--j]);
    return res.reverse().join('');
}
// Complexity verified: O(m * n) runtime, O(m * n) memory
