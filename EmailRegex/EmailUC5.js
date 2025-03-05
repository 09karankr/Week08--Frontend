const emailPattern = /^abc([._+,-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;

function validateEmail(email) {
    return emailPattern.test(email);
}

console.log(validateEmail("abc@bridgelabz.co"));       // true
console.log(validateEmail("abc.xyz@bridgelabz.co"));   // true
console.log(validateEmail("abc-xyz@bridgelabz.co"));   // true
console.log(validateEmail("abc+xyz@bridgelabz.co"));   // true
console.log(validateEmail("abc_xyz@bridgelabz.co"));   // true
console.log(validateEmail("abc,xyz@bridgelabz.co"));   // true
console.log(validateEmail("abc@bridgelabz.co.in"));    // true
console.log(validateEmail("abc.xyz@bridgelabz.co.in"));// true
console.log(validateEmail("abc@bridgelabz.co.us"));    // true
console.log(validateEmail("abc@bridgelabz.co.uk"));    // true
console.log(validateEmail("abc@xyz.co"));              // false
console.log(validateEmail("xyz@bridgelabz.co"));       // false (must start with abc)
console.log(validateEmail("abc#xyz@bridgelabz.co"));   // false (invalid special character #)
console.log(validateEmail("abc@bridgelabzcom"));       // false (missing dot before co)
console.log(validateEmail("abc@bridgelabz.c"));        // false (TLD must be exactly 2 characters)
console.log(validateEmail("abc@bridgelabz.co.india")); // false (TLD should be only 2 characters)
