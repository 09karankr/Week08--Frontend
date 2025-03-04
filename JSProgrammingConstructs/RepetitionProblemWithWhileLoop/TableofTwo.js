// Read input from command line
let args = process.argv.slice(2);
let n = parseInt(args[0]);

// Validate input
if (isNaN(n) || n < 0) {
    console.log("Invalid input! Please enter a non-negative integer.");
} else {
    let power = 0;
    let value = 1; // 2^0 = 1

    console.log(`Powers of 2 up to 2^${n} (max 256):`);
    
    while (power <= n && value <= 256) {
        console.log(`2^${power} = ${value}`);
        power++;        // Increment exponent
        value *= 2;     // Calculate next power of 2
    }
}
