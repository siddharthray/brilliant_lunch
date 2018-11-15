# brilliant_lunch
---
#### I have written the code in JavaScript ES6
---
## sample set of events included
```
const events = [
 {start: 225, end: 285, name: "Hemant" },
 {start: 210, end: 270, name: "Rani"},
 {start: 180, end: 240, name: "Raj" },
 {start: 180, end: 330, name: "Harshit"},
 {start: 300, end: 360, name: "Gautam"},
 {start: 270, end: 330, name: "Kishore"  }
];
```
## request event is added
const requestByNikki = { start: 220, end: 280, name: "Nikki" };

## time overlap algorithm
```
const match = req => opt => ({
  // Calculate the overlap between two blocks
  overlap: opt.end <= req.start || opt.start > req.end
    ? 0
    : Math.min(req.end, opt.end) - Math.max(req.start, opt.start),
  // The earliest start time of this meeting
  start: Math.max(req.start, opt.start),
  label: `${req.name} - ${opt.name}`
});
```

## Overlap rule for 30 or mins
```
const overlapRule = ({ overlap }) => overlap >= 30;
```

### sorting logic
```
const sortLogic = (m1, m2) => 
  // Sort by overlap first
  m2.overlap > m1.overlap ?  1 : 
  m2.overlap < m1.overlap ? -1 :
  // Sort by start second
  m2.start > m1.start     ? -1 :
  m2.start < m1.start     ?  1 :
                             0 ;
  ```
                             
 ### Chaining match filter and sorting
 ```
const matchLunchEvent = events
  .map(match(requestByNikki))
  .filter(overlapRule)
  .sort(sortLogic);
 ```
 
### Output for the sample events
```
  "Brilliant Lunch:"
[object Object] {
  label: "Nikki - Harshit",
  overlap: 60,
  start: 220
}
"
All possibilities Brilliant Lunch:"
[[object Object] {
  label: "Nikki - Harshit",
  overlap: 60,
  start: 220
}, [object Object] {
  label: "Nikki - Hemant",
  overlap: 55,
  start: 225
}, [object Object] {
  label: "Nikki - Rani",
  overlap: 50,
  start: 220
}]
```
---
  ##### I have written the logic for the problem statement and made the sample temple.The template won't have event blocks on it beacuse I am not sure what jquery or other lib need to be used for setting the block on the different time.
  
  ### I hope you will like my algorithm logic. It is quit efficient.
  ### Thank you !
