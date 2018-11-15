
"use strict"

const requestByJohn = { start: 220, end: 280, name: "John" };
const events = [
 {start: 225, end: 285, name: "Jane" },
 {start: 210, end: 270, name: "Aisha"},
 {start: 180, end: 240, name: "Brad" },
 {start: 180, end: 330, name: "Alice"},
 {start: 300, end: 360, name: "Yusef"},
 {start: 270, end: 330, name: "Rob"  }
];

const match = req => opt => ({
  // Calculate the overlap between two blocks
  overlap: opt.end <= req.start || opt.start > req.end
    ? 0
    : Math.min(req.end, opt.end) - Math.max(req.start, opt.start),
  // The earliest start time of this meeting
  start: Math.max(req.start, opt.start),
  label: `${req.name} - ${opt.name}`
});

const overlapRule = ({ overlap }) => overlap >= 30;
const sortLogic = (m1, m2) => 
  // Sort by overlap first
  m2.overlap > m1.overlap ?  1 : 
  m2.overlap < m1.overlap ? -1 :
  // Sort by start second
  m2.start > m1.start     ? -1 :
  m2.start < m1.start     ?  1 :
                             0 ;

// Chain match, filter, sort:
const matchLunchEvent = events
  .map(match(requestByJohn))
  .filter(overlapRule)
  .sort(sortLogic);
  
console.log(
  "Brilliant Lunch:",
  matchLunchEvent[0], // no possible event will return undefined
  "\nAll possibilities:",
  matchLunchEvent
)
