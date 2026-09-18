// Day 123: Implement Trie Prefix Tree
// Category: Trie
// Time Complexity: O(word length)
// Space Complexity: O(total characters)

export class Trie { constructor() { this.root = {}; } insert(word) { let node = this.root; for (let c of word) { if (!node[c]) node[c] = {}; node = node[c]; } node.isEnd = true; } search(word) { let node = this.root; for (let c of word) { if (!node[c]) return false; node = node[c]; } return !!node.isEnd; } startsWith(prefix) { let node = this.root; for (let c of prefix) { if (!node[c]) return false; node = node[c]; } return true; } }
