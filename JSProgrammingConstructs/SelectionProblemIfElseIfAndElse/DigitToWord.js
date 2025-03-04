// Function to convert a single-digit number to a word
function numberToWord(number) {
    if (number === 0) {
        return "Zero";
    } else if (number === 1) {
        return "One";
    } else if (number === 2) {
        return "Two";
    } else if (number === 3) {
        return "Three";
    } else if (number === 4) {
        return "Four";
    } else if (number === 5) {
        return "Five";
    } else if (number === 6) {
        return "Six";
    } else if (number === 7) {
        return "Seven";
    } else if (number === 8) {
        return "Eight";
    } else if (number === 9) {
        return "Nine";
    } else {
        return "Invalid input! Please enter a single-digit number (0-9).";
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
