import { WordDictionary } from './solution.js'; const wd = new WordDictionary(); wd.addWord("bad"); console.log("WordDictionary test:", wd.search(".ad") ? "PASS" : "FAIL");
