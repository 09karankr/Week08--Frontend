// Initial money and goal
let money = 100;
const goal = 200;
let bets = 0;
let wins = 0;

// Function to simulate a single bet
function gamble() {
    return Math.random() < 0.5; // 50% chance of winning
}

// Simulate gambling until gambler goes broke or reaches the goal
while (money > 0 && money < goal) {
    bets++; // Count each bet

    if (gamble()) {
        money++; // Win Rs 1
        wins++;
    } else {
        money--; // Lose Rs 1
    }
}

// Print results
console.log(`Total Bets Made: ${bets}`);
console.log(`Total Wins: ${wins}`);
console.log(`Final Money: Rs ${money}`);

if (money === goal) {
    console.log(" Congratulations! You reached Rs 200.");
} else {
    console.log(" You went broke! Game over.");
}
