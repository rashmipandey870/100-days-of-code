// Day 172: Detect Squares Coordinate Hashing
// Category: Math & Geometry
// Time Complexity: O(n)
// Space Complexity: O(n)

export class DetectSquares {
    constructor() {
        this.ptsCount = new Map();
        this.pts = [];
    }
    add(point) {
        const key = `${point[0]},${point[1]}`;
        this.ptsCount.set(key, (this.ptsCount.get(key) || 0) + 1);
        this.pts.push(point);
    }
    count(point) {
        let res = 0;
        const [px, py] = point;
        for (const [x, y] of this.pts) {
            if (Math.abs(py - y) !== Math.abs(px - x) || x === px || y === py) continue;
            res += (this.ptsCount.get(`${x},${py}`) || 0) * (this.ptsCount.get(`${px},${y}`) || 0);
        }
        return res;
    }
}
