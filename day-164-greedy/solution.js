// Day 164: Hand of Straights Card Grouping
// Category: Greedy
// Time Complexity: O(n log n)
// Space Complexity: O(n)

export function isNStraightHand(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;
    hand.sort((a, b) => a - b);
    const count = new Map();
    for (const card of hand) count.set(card, (count.get(card) || 0) + 1);
    for (const card of hand) {
        if (count.get(card) === 0) continue;
        for (let i = 0; i < groupSize; i++) {
            const curr = card + i;
            if (!count.get(curr)) return false;
            count.set(curr, count.get(curr) - 1);
        }
    }
    return true;
}
// Complexity verified: O(n log n) runtime, O(n) memory
