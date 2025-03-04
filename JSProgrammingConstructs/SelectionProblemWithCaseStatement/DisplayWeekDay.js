
function getWeekday(number) {
    switch (number) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid input! Please enter a number between 1 and 7.";
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
