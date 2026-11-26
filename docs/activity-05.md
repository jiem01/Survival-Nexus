# Activity 05: Calculate Daily Rations

## Predictions
- A [12,9,0], daily 3: coverage [4,3,0], total 21, shelters 3, below 2 days: 1
- B [6,3,15,1], daily 3: coverage [2,1,5,0], total 25, shelters 4, below 2 days: 2
- Empty []: coverage [], total 0, shelters 0, below 2 days: 0
- Daily 0: rejected
- [3,-1,6]: rejected at position 1, no partial report

## Hand trace for [12, 9, 0], daily 3
- Start: total = 0
- 12: 12/3 = 4 days, total = 12
- 9: 9/3 = 3 days, total = 21
- 0: 0/3 = 0 days, total = 21 (0 is below 2, so low count = 1)
- Result: coverage [4,3,0], total 21, 3 shelters

## Zero shelters vs invalid allowance
Zero shelters is valid data: the loop runs zero times, so the total is 0 and the report is empty. A daily requirement of 0 is invalid because it would divide by zero and means the ration rule itself is broken, so it is rejected.

## Actual results
A => coverage [4,3,0] | total 21 | shelters 3 | below 2 days 1
B => coverage [2,1,5,0] | total 25 | shelters 4 | below 2 days 2
Empty => coverage [] | total 0 | shelters 0 | below 2 days 0
Daily 0 => Rejected: daily requirement must be a positive safe integer.
Negative => Rejected: invalid stock at position 1 (counting from 0).

All actual results matched my predictions.

## Links
(paste PR link later)