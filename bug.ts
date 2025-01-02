function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This will print numbers from 1 to 5

function printNumbersWithIssue(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i === 3) {
      return; // Unexpected early return
    }
  }
}

printNumbersWithIssue(5); // This will print only 1,2,3, then terminates