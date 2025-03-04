// Read input from the command line
let args = process.argv.slice(2);
let n = parseInt(args[0]);

// Validate input
if (isNaN(n) || n < 0) {
    console.log("Invalid input! Please enter a non-negative integer.");
} else {
    console.log(`Powers of 2 up to 2^${n}:`);
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
    }
}
