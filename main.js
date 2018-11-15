
"use strict"

const requestByNikki = { start: 220, end: 280, name: "Nikki" };
const events = [
 {start: 225, end: 285, name: "Hemant" },
 {start: 210, end: 270, name: "Rani"},
 {start: 180, end: 240, name: "Raj" },
 {start: 180, end: 330, name: "Harshit"},
 {start: 300, end: 360, name: "Gautam"},
 {start: 270, end: 330, name: "Kishore"  }
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
  .map(match(requestByNikki))
  .filter(overlapRule)
  .sort(sortLogic);
  
console.log(
  "Brilliant Lunch:",
  matchLunchEvent[0], // no possible event will return undefined
  "\nAll possibilities:",
  matchLunchEvent
)
