// Day 171: Pow(x, n) Binary Exponentiation
// Category: Math & Geometry
// Time Complexity: O(log n)
// Space Complexity: O(1)

export function myPow(x, n) {
    if (n === 0) return 1;
    let exp = Math.abs(n);
    let result = 1, base = x;
    while (exp > 0) {
        if (exp % 2 === 1) result *= base;
        base *= base;
        exp = Math.floor(exp / 2);
    }
    return n < 0 ? 1 / result : result;
}
// Complexity verified: O(log n) runtime, O(1) memory
