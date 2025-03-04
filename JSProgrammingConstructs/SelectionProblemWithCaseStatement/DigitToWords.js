
function numberToWord(number) {
    switch (number) {
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        default: return "Invalid input! Please enter a single-digit number (0-9).";
    }
}

// Read input from the command line
let args = process.argv.slice(2);
let number = parseInt(args[0]);

// Validate input and print result
if (!isNaN(number) && number >= 0 && number <= 9) {
    console.log(numberToWord(number));
} else {
    console.log("Invalid input! Please enter a single-digit number (0-9).");
}
