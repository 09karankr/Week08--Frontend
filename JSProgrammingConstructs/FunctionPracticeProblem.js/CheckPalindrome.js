
function isPalindrome(num) {
    let originalNum = num.toString(); // Convert number to string
    let reversedNum = originalNum.split("").reverse().join(""); // Reverse the string
    return originalNum === reversedNum; // Compare original and reversed
}

// Function to check if two numbers are palindromes
function checkTwoPalindromes(num1, num2) {
    if (isPalindrome(num1)) {
        console.log(`${num1} is a palindrome.`);
    } else {
        console.log(`${num1} is not a palindrome.`);
    }

    if (isPalindrome(num2)) {
        console.log(`${num2} is a palindrome.`);
    } else {
        console.log(`${num2} is not a palindrome.`);
    }
}

// Example usage
let number1 = 121;
let number2 = 123;

checkTwoPalindromes(number1, number2);
