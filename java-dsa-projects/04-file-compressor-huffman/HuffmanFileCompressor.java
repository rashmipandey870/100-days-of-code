import java.util.*;

/**
 * Project 4: File Compressor using Huffman Coding & Greedy Algorithm in Java
 * DSA Concepts Used:
 * 1. Frequency HashMap: Counts character occurrences in the input data.
 * 2. PriorityQueue (Min-Heap): Greedily merges the two least-frequent nodes to build
 *    an optimal bottom-up Binary Huffman Tree.
 * 3. DFS Tree Traversal: Generates variable-length prefix-free binary codes (frequent chars get short codes).
 */
public class HuffmanFileCompressor {

    static class HuffmanNode implements Comparable<HuffmanNode> {
        char ch;
        int freq;
        HuffmanNode left, right;

        HuffmanNode(char ch, int freq, HuffmanNode left, HuffmanNode right) {
            this.ch = ch;
            this.freq = freq;
            this.left = left;
            this.right = right;
        }

        boolean isLeaf() {
            return left == null && right == null;
        }

        @Override
        public int compareTo(HuffmanNode other) {
            return Integer.compare(this.freq, other.freq);
        }
    }

    private final Map<Character, String> huffmanCodes = new HashMap<>();
    private HuffmanNode root;

    public String compress(String text) {
        if (text == null || text.isEmpty()) return "";

        // Step 1: Count character frequencies
        Map<Character, Integer> freqMap = new HashMap<>();
        for (char c : text.toCharArray()) {
            freqMap.put(c, freqMap.getOrDefault(c, 0) + 1);
        }

        // Step 2: Push leaf nodes into Min-Heap
        PriorityQueue<HuffmanNode> minHeap = new PriorityQueue<>();
        for (Map.Entry<Character, Integer> entry : freqMap.entrySet()) {
            minHeap.offer(new HuffmanNode(entry.getKey(), entry.getValue(), null, null));
        }

        // Step 3: Greedily merge two smallest nodes until 1 root remains
        while (minHeap.size() > 1) {
            HuffmanNode left = minHeap.poll();
            HuffmanNode right = minHeap.poll();
            HuffmanNode merged = new HuffmanNode('\0', left.freq + right.freq, left, right);
            minHeap.offer(merged);
        }

        root = minHeap.poll();
        buildCodeTable(root, "");

        // Step 4: Encode input text into binary bitstream
        StringBuilder encoded = new StringBuilder();
        for (char c : text.toCharArray()) {
            encoded.append(huffmanCodes.get(c));
        }
        return encoded.toString();
    }

    private void buildCodeTable(HuffmanNode node, String code) {
        if (node == null) return;
        if (node.isLeaf()) {
            huffmanCodes.put(node.ch, code.isEmpty() ? "0" : code);
            return;
        }
        buildCodeTable(node.left, code + "0");
        buildCodeTable(node.right, code + "1");
    }

    public String decompress(String encodedBits) {
        StringBuilder decoded = new StringBuilder();
        HuffmanNode curr = root;
        for (int i = 0; i < encodedBits.length(); i++) {
            curr = (encodedBits.charAt(i) == '0') ? curr.left : curr.right;
            if (curr.isLeaf()) {
                decoded.append(curr.ch);
                curr = root;
            }
        }
        return decoded.toString();
    }

    public static void main(String[] args) {
        String sampleData = "lossless file compression using greedy huffman coding tree in java";
        HuffmanFileCompressor compressor = new HuffmanFileCompressor();

        String compressedBits = compressor.compress(sampleData);
        String restoredText = compressor.decompress(compressedBits);

        int originalBits = sampleData.length() * 8;
        int compressedSize = compressedBits.length();
        double savings = 100.0 * (originalBits - compressedSize) / originalBits;

        System.out.println("=== Huffman File Compressor (Greedy & Min-Heap) ===");
        System.out.println("Original Size   : " + originalBits + " bits");
        System.out.println("Compressed Size : " + compressedSize + " bits");
        System.out.printf("Space Saved     : %.2f%%%n", savings);
        System.out.println("Lossless Match  : " + sampleData.equals(restoredText));
    }
}
