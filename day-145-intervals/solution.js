// Day 145: Meeting Rooms Schedule Conflict
// Category: Intervals
// Time Complexity: O(n log n)
// Space Complexity: O(1)

export function canAttendMeetings(intervals) { intervals.sort((a, b) => a[0] - b[0]); for (let i = 1; i < intervals.length; i++) if (intervals[i][0] < intervals[i - 1][1]) return false; return true; }
// Complexity verified: O(n log n) runtime, O(1) memory
