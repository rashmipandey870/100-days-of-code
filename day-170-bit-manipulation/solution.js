// Day 170: Sum of Two Integers Bitwise Adder
// Category: Bit Manipulation
// Time Complexity: O(1)
// Space Complexity: O(1)

export function getSum(a, b) {
    while (b !== 0) {
        const carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a;
}
// Complexity verified: O(1) runtime, O(1) memory
