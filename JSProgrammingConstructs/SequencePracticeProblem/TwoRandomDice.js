function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let dice1 = rollDice();
let dice2 = rollDice();
let sum = dice1 + dice2;

console.log(`Dice 1: ${dice1}, Dice 2: ${dice2}, Sum: ${sum}`);
