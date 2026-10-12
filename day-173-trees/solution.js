// Day 173: Binary Tree Cameras Greedy DFS
// Category: Trees
// Time Complexity: O(n)
// Space Complexity: O(h)

export function minCameraCover(root) {
    let cameras = 0;
    function dfs(node) {
        if (!node) return 2;
        const left = dfs(node.left);
        const right = dfs(node.right);
        if (left === 0 || right === 0) {
            cameras++;
            return 1;
        }
        return (left === 1 || right === 1) ? 2 : 0;
    }
    if (dfs(root) === 0) cameras++;
    return cameras;
}
