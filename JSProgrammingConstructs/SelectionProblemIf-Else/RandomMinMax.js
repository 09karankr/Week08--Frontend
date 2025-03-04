function getRandomThreeDigit() {
    return Math.floor(Math.random() * 900) + 100; // Generates a number between 100 and 999
}

let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(getRandomThreeDigit());
}

let min = numbers[0];
let max = numbers[0];

// Find min and max using if-else
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(`Random Numbers: ${numbers}`);
console.log(`Minimum Value: ${min}`);
console.log(`Maximum Value: ${max}`);
