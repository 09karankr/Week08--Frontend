// Function to get unit name based on number
function getPlaceValue(number) {
    if (number === 1) {
        return "Unit";
    } else if (number === 10) {
        return "Ten";
    } else if (number === 100) {
        return "Hundred";
    } else if (number === 1000) {
        return "Thousand";
    } else if (number === 10000) {
        return "Ten Thousand";
    } else if (number === 100000) {
        return "Lakh";
    } else if (number === 1000000) {
        return "Ten Lakh";
    } else if (number === 10000000) {
        return "Crore";
    } else {
        return "Invalid input! Please enter 1, 10, 100, 1000, etc.";
    }
}

// Read input from the command line
let args = process.argv.slice(2);
let number = parseInt(args[0]);

// Validate input and print result
if (!isNaN(number) && number > 0) {
    console.log(getPlaceValue(number));
} else {
    console.log("Invalid input! Please enter 1, 10, 100, 1000, etc.");
}
