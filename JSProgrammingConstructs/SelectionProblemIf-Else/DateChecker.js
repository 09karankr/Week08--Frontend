
let args = process.argv.slice(2);

// Parse day and month from command-line arguments
let day = parseInt(args[0]);
let month = parseInt(args[1]);

// Check if the date is between March 20 and June 20
let isInRange = false;

if ((month === 3 && day >= 20) ||  // March 20 onwards
    (month > 3 && month < 6) ||    // Entire April & May
    (month === 6 && day <= 20)) {  // Up to June 20
    isInRange = true;
}

console.log(isInRange);
