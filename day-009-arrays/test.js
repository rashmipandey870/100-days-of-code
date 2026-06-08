import { encodeDecode } from './solution.js';

console.log("Encode/Decode test:", JSON.stringify(decode(encode(["lint","code"]))) === JSON.stringify(["lint","code"]) ? "PASS" : "FAIL");
