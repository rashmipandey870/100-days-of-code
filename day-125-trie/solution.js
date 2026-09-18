// Day 125: Word Search II Multi-Word
// Category: Trie
// Time Complexity: O(m * n * 4^L)
// Space Complexity: O(total letters)

export function findWords(board, words) { const root = {}; for (let w of words) { let node = root; for (let c of w) { if (!node[c]) node[c] = {}; node = node[c]; } node.word = w; } const res = [], rows = board.length, cols = board[0].length; function dfs(r, c, node) { const char = board[r][c]; if (!node[char]) return; const next = node[char]; if (next.word) { res.push(next.word); next.word = null; } board[r][c] = '#'; for (let [dr, dc] of [[1,0],[-1,0],[0,1],[0,-1]]) { const nr = r + dr, nc = c + dc; if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc] !== '#') dfs(nr, nc, next); } board[r][c] = char; } for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) dfs(r, c, root); return res; }
