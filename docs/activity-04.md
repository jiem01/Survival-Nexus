# Activity 04: Establish Gate Protocols

## Concepts
- `<` is a strict comparison. `===` compares value and type with no conversion, so "2" === 2 is false.
- Boundary cases (0, 1, 5 when stock is 5, 1,000,000) are where off-by-one mistakes hide.
- Number.isSafeInteger rejects NaN, Infinity, fractions, and strings.

## Error messages chosen
- "Rejected: stock must be an integer from 0 to 1,000,000."
- "Rejected: request must be an integer from 1 to 1,000,000."
- "Rejected: infection status must be true or false."
- "Rejected: infected source cannot transfer supplies."
- "Rejected: request exceeds stock."
- "Invalid: ..." for ration problems.

## Predictions (stock = 5)
- Request 2: approved, stock 3
- Request 5: approved, stock 0
- Request 6: rejected, stock 5
- Request 0: rejected, stock 5
- Request -1: rejected, stock 5
- Request 1.5: rejected, stock 5
- Infected source: rejected, stock 5
- Request "2": rejected, stock 5
- Request NaN: rejected, stock 5
- Request Infinity: rejected, stock 5

## Actual results
(paste terminal output below this line)
=== WATER ===
Starting units: 18
Daily demand: 12
Complete days: 1
Leftover: 6
=== FOOD ===
Starting units: 25
Daily demand: 8
Complete days: 3
Leftover: 1
stock 5 request 2 infected false => true | stock now 3 | Approved: 2 released. Stock left: 3.
stock 5 request 5 infected false => true | stock now 0 | Approved: 5 released. Stock left: 0.
stock 5 request 6 infected false => false | stock now 5 | Rejected: request exceeds stock.
stock 5 request 0 infected false => false | stock now 5 | Rejected: request must be an integer from 1 to 1,000,000.
stock 5 request -1 infected false => false | stock now 5 | Rejected: request must be an integer from 1 to 1,000,000.
stock 5 request 1.5 infected false => false | stock now 5 | Rejected: request must be an integer from 1 to 1,000,000.
stock 5 request 1 infected true => false | stock now 5 | Rejected: infected source cannot transfer supplies.
stock 5 request 2 infected false => false | stock now 5 | Rejected: request must be an integer from 1 to 1,000,000.
stock 5 request NaN infected false => false | stock now 5 | Rejected: request must be an integer from 1 to 1,000,000.
stock 5 request Infinity infected false => false | stock now 5 | Rejected: request must be an integer from 1 to 1,000,000.
Supplies last 10 full day(s).
Supplies last 0 full day(s).
Invalid: survivors must be a positive safe integer.
Invalid: daily allowance must be a positive safe integer.

## PR link
(https://github.com/jiem01/Survival-Nexus/pull/2)

