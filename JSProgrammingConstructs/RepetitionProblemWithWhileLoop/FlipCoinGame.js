
function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
}

// Variables to track the count of Heads and Tails
let headsCount = 0;
let tailsCount = 0;

// Continue flipping the coin until either Heads or Tails reaches 11 wins
while (headsCount < 11 && tailsCount < 11) {
    let result = flipCoin();
    
    if (result === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`Flip: ${result} | Heads: ${headsCount}, Tails: ${tailsCount}`);
}

// Determine and print the winner
if (headsCount === 11) {
    console.log(" Heads wins 11 times first!");
} else {
    console.log(" Tails wins 11 times first!");
}
