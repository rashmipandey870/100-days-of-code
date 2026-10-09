// Day 169: Reverse Bits 32-Bit Integer
// Category: Bit Manipulation
// Time Complexity: O(1)
// Space Complexity: O(1)

export function reverseBits(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        res = (res << 1) | (n & 1);
        n >>>= 1;
    }
    return res >>> 0;
}
// Complexity verified: O(1) runtime, O(1) memory
