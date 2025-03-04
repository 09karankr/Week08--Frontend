
function primeFactors(n) {
    let factors = [];

    // Handle multiple factors of 2
    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }

    
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }

    
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Read input from the command line
let args = process.argv.slice(2);
let num = parseInt(args[0]);

// Validate input and compute prime factors
if (isNaN(num) || num <= 0) {
    console.log("Invalid input! Please enter a positive integer.");
} else {
    console.log(`Prime factors of ${num} are: ${primeFactors(num).join(" ")}`);
}
