# Activity 06: Build the Survival Toolkit

## Setup checks
- package.json created, http-server@14.1.1 installed
- .gitignore keeps node_modules/ out of Git
- npm run web served the app at http://127.0.0.1:5500 and the console output matched
- Script tag changed to type="module"

## What I built
- daysOfSupplies(units, dailyUse) in web/js/domain.js, imported by main.js
- Water and food calculations now call it
- Invalid input throws RangeError

## Predictions and results
- daysOfSupplies(18, 5): predicted 3
- daysOfSupplies(10, 5): predicted 2
- daysOfSupplies(0, 5): predicted 0
- daysOfSupplies(1000000, 1): predicted 1000000
- dailyUse 0, -1, 1.5, "2", NaN, Infinity: predicted RangeError
- Actual: all tests passed with npm test (fail 0)

## Why one successful case is not enough
One passing case like 18 and 5 never tries a bad denominator. A dailyUse of 0 would make JavaScript return Infinity instead of an error, and the single test would still pass. Only tests with invalid inputs prove the function rejects them.

## Links
(paste PR link later)