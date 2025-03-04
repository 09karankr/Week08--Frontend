// Function to perform arithmetic operations and find max and min
function findMaxMin(a, b, c) {
    // Perform arithmetic operations
    let result1 = a + b * c;
    let result2 = a % b + c;
    let result3 = c + a / b;
    let result4 = a * b + c;

    console.log("Results of Arithmetic Operations:");
    console.log("1. a + b * c = " + result1);
    console.log("2. a % b + c = " + result2);
    console.log("3. c + a / b = " + result3);
    console.log("4. a * b + c = " + result4);

    // Find maximum and minimum values
    let maxResult = Math.max(result1, result2, result3, result4);
    let minResult = Math.min(result1, result2, result3, result4);

    console.log("\nMaximum result: " + maxResult);
    console.log("Minimum result: " + minResult);
}

// Read input from command line
let args = process.argv.slice(2);
if (args.length < 3) {
    console.log("Please provide three numbers.");
} else {
    let a = parseFloat(args[0]);
    let b = parseFloat(args[1]);
    let c = parseFloat(args[2]);

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        findMaxMin(a, b, c);
    } else {
        console.log("Invalid input! Please enter numeric values.");
    }
}
