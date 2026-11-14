# Activity 03 - Count the Supplies

## Predictions and results
- `2 + 3` gives `5` because both are numbers, so `+` adds them.
- `"2" + "3"` gives `"23"` because they are strings, so `+` joins the text.

## Division, rounding, and remainder
- Division (`/`) tells how many times the daily demand fits into the supply. 18 / 12 = 1.5.
- Rounding down (`Math.floor`) keeps only complete days, since a half day cannot fully feed everyone. 1.5 becomes 1.
- Remainder (leftover) is what is left after the complete days: 18 - (1 x 12) = 6.

## Checks
| Water units | Survivors | Per day | Daily demand | Complete days | Leftover |
|---|---|---|---|---|---|
| 18 | 6 | 2 | 12 | 1 | 6 |
| 24 | 6 | 2 | 12 | 2 | 0 |
| 0 | 6 | 2 | 12 | 0 | 0 |

Food check (25 units, 4 survivors, 2 each): daily demand 8, complete days 3, leftover 1.

Zero survivors is an invalid input (it would divide by zero). It will be handled in Activity 04.

## Git
Commit link: (https://github.com/jiem01/Survival-Nexus/commit/c261a86)
