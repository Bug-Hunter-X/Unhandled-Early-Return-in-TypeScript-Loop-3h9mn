# Unhandled Early Return in TypeScript Loop
This repository demonstrates an uncommon code error in TypeScript involving an unexpected early return statement within a loop. The function `printNumbersWithIssue` is intended to print numbers from 1 to n, but the `return` statement inside the loop causes the function to terminate prematurely when `i` reaches 3, regardless of the value of n. This can lead to unexpected behavior and logic errors if not carefully handled.

## How to Reproduce
1. Clone this repository.
2. Open `bug.ts` and examine the `printNumbersWithIssue` function.
3. Run the TypeScript code (e.g., using `tsc bug.ts && node bug.js`).
4. Observe that the output is 1, 2, 3, instead of 1, 2, 3, 4, 5 as expected.

## Solution
The solution provided in `bugSolution.ts` addresses the issue by removing the unexpected `return` statement.