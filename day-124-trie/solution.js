// Day 124: Design Add Search Words
// Category: Trie
// Time Complexity: O(m)
// Space Complexity: O(total characters)

export class WordDictionary { constructor() { this.root = {}; } addWord(word) { let node = this.root; for (let c of word) { if (!node[c]) node[c] = {}; node = node[c]; } node.isEnd = true; } search(word, node = this.root) { for (let i = 0; i < word.length; i++) { const c = word[i]; if (c === '.') { for (let key of Object.keys(node)) { if (key !== 'isEnd' && this.search(word.slice(i + 1), node[key])) return true; } return false; } if (!node[c]) return false; node = node[c]; } return !!node.isEnd; } }
