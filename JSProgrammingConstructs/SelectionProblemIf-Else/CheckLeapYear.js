// Function to check if a year is a leap year
function isLeapYear(year) {
    // Check if the year is a 4-digit number
    if (year < 1000 || year > 9999) {
        console.log("Please enter a valid 4-digit year.");
        return;
    }

    // Leap year conditions
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year.");
    } else {
        console.log(year + " is not a Leap Year.");
    }
}

// Read year from command-line arguments
let args = process.argv.slice(2);

if (args.length === 0) {
    console.log("Usage: node leapYear.js <year>");
} else {
    let year = parseInt(args[0]);

    if (!isNaN(year)) {
        isLeapYear(year);
    } else {
        console.log("Please provide a valid numeric year.");
    }
}
