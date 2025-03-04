// Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) return false; // 0 and 1 are not prime

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
}

// Function to print prime numbers in a given range
function printPrimesInRange(start, end) {
    console.log(`Prime numbers between ${start} and ${end}:`);
    
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            process.stdout.write(i + " "); // Print primes in one line
        }
    }
    console.log(); 
}

// Read input from the command line
let args = process.argv.slice(2);
let start = parseInt(args[0]);
let end = parseInt(args[1]);

// Validate input
if (isNaN(start) || isNaN(end) || start < 0 || end < 0 || start > end) {
    console.log("Invalid input! Please enter a valid range (two positive numbers where start ≤ end).");
} else {
    printPrimesInRange(start, end);
}
