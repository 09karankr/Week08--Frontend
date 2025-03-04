// Function to get weekday name based on number
function getWeekday(number) {
    if (number === 1) {
        return "Sunday";
    } else if (number === 2) {
        return "Monday";
    } else if (number === 3) {
        return "Tuesday";
    } else if (number === 4) {
        return "Wednesday";
    } else if (number === 5) {
        return "Thursday";
    } else if (number === 6) {
        return "Friday";
    } else if (number === 7) {
        return "Saturday";
    } else {
        return "Invalid input! Please enter a number between 1 and 7.";
    }
}

// Read input from the command line
let args = process.argv.slice(2);
let number = parseInt(args[0]);

// Validate input and print result
if (!isNaN(number) && number >= 1 && number <= 7) {
    console.log(getWeekday(number));
} else {
    console.log("Invalid input! Please enter a number between 1 and 7.");
}
