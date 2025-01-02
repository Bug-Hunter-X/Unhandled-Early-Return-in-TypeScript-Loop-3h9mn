function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This will print numbers from 1 to 5

function printNumbersCorrected(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    // Removed the unexpected return statement
  }
}

printNumbersCorrected(5); // This will correctly print numbers from 1 to 5