// Read input from the command line
let args = process.argv.slice(2);
let n = parseInt(args[0]);

// Validate input
if (isNaN(n) || n <= 0) {
    console.log("Invalid input! Please enter a positive integer.");
} else {
    let harmonic = 0;
    
    // Compute harmonic number using a loop
    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
    }

    console.log(`The ${n}th harmonic number is: ${harmonic.toFixed(6)}`);
}
