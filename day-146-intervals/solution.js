// Day 146: Meeting Rooms II Min Conference Rooms
// Category: Intervals
// Time Complexity: O(n log n)
// Space Complexity: O(n)

export function minMeetingRooms(intervals) { const starts = intervals.map(i => i[0]).sort((a, b) => a - b), ends = intervals.map(i => i[1]).sort((a, b) => a - b); let rooms = 0, endIdx = 0; for (let i = 0; i < starts.length; i++) { if (starts[i] < ends[endIdx]) rooms++; else endIdx++; } return rooms; }
// Complexity verified: O(n log n) runtime, O(n) memory
