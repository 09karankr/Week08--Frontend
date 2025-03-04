const readline = require("readline");

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function isPrime(num) {
    if (num < 2) return false; // 0 and 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join("")); // Reverse number
}

// Function to check if the number and its palindrome are prime
function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
        
        let palindromeNum = getPalindrome(num);
        console.log(`Palindrome of ${num} is ${palindromeNum}.`);
        
        if (isPrime(palindromeNum)) {
            console.log(`The palindrome ${palindromeNum} is also a prime number.`);
        } else {
            console.log(`The palindrome ${palindromeNum} is not a prime number.`);
        }
    } else {
        console.log(`${num} is not a prime number.`);
    }
}

// Get user input
rl.question("Enter a number: ", function(userInput) {
    let number = parseInt(userInput);
    checkPrimeAndPalindrome(number);
    rl.close();
});
