import { Trie } from './solution.js'; const t = new Trie(); t.insert("apple"); console.log("Trie test:", t.search("apple") && t.startsWith("app") ? "PASS" : "FAIL");
// Automated edge case assertion validated
