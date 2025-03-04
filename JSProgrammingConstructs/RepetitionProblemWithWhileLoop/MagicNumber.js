const readline = require("readline");

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Think of a number between 1 and 100, and I'll guess it!");

// Function to find the magic number using while loop
function findMagicNumber() {
    let start = 1;
    let end = 100;
    let found = false;

    while (!found && start <= end) {
        let mid = Math.floor((start + end) / 2);

        console.log(`Is your number ${mid}?`);
        rl.question("Enter 'yes' if correct, 'greater' if your number is higher, or 'less' if lower: ", (answer) => {
            if (answer.toLowerCase() === "yes") {
                console.log(`Hooray! Your magic number is: ${mid}`);
                rl.close();
                found = true;
            } else if (answer.toLowerCase() === "greater") {
                start = mid + 1;
            } else if (answer.toLowerCase() === "less") {
                end = mid - 1;
            } else {
                console.log("Invalid input! Please enter 'yes', 'greater', or 'less'.");
            }

            // If the search space is exhausted
            if (start > end) {
                console.log("Something went wrong! Try again.");
                rl.close();
            }
        });
    }
}


findMagicNumber();
