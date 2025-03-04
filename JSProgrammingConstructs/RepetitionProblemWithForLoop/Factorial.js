// Function to compute factorial
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Read input from the command line
let args = process.argv.slice(2);
let num = parseInt(args[0]);

// Validate input and compute factorial
if (isNaN(num) || num < 0) {
    console.log("Invalid input! Please enter a non-negative integer.");
} else {
    console.log(`Factorial of ${num} is: ${factorial(num)}`);
}
