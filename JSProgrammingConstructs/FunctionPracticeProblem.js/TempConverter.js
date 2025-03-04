const readline = require("readline");

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Ask user for conversion choice
console.log("Choose conversion type:");
console.log("1. Celsius to Fahrenheit");
console.log("2. Fahrenheit to Celsius");

rl.question("Enter your choice (1 or 2): ", function(choice) {
    switch (choice) {
        case "1":
            rl.question("Enter temperature in Celsius (0°C to 100°C): ", function(temp) {
                let celsius = parseFloat(temp);
                if (celsius >= 0 && celsius <= 100) {
                    let fahrenheit = celsiusToFahrenheit(celsius);
                    console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`);
                } else {
                    console.log("Invalid input! Please enter a temperature between 0°C and 100°C.");
                }
                rl.close();
            });
            break;

        case "2":
            rl.question("Enter temperature in Fahrenheit (32°F to 212°F): ", function(temp) {
                let fahrenheit = parseFloat(temp);
                if (fahrenheit >= 32 && fahrenheit <= 212) {
                    let celsius = fahrenheitToCelsius(fahrenheit);
                    console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);
                } else {
                    console.log("Invalid input! Please enter a temperature between 32°F and 212°F.");
                }
                rl.close();
            });
            break;

        default:
            console.log("Invalid choice! Please enter 1 or 2.");
            rl.close();
            break;
    }
});
