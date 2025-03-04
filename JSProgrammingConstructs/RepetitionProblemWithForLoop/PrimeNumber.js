// Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) return false; // Numbers 0 and 1 are not prime

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
}

// Read input from the command line
let args = process.argv.slice(2);
let num = parseInt(args[0]);

// Validate input and check for prime
if (isNaN(num) || num < 0) {
    console.log("Invalid input! Please enter a positive integer.");
} else {
    if (isPrime(num)) {
        console.log(num + " is a Prime Number");
    } else {
        console.log(num + " is not a Prime Number");
    }
}
