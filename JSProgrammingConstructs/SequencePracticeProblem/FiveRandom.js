function getRandomTwoDigit() {
    return Math.floor(Math.random() * 90) + 10; 
}

let numbers = [];
let sum = 0;

for (let i = 0; i < 5; i++) {
    let num = getRandomTwoDigit();
    numbers.push(num);
    sum += num;
}

let average = sum / numbers.length;

console.log(`Random Numbers: ${numbers}`);
console.log(`Sum: ${sum}`);
console.log(`Average: ${average.toFixed(2)}`);
