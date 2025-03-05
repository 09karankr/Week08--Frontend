const emailPattern = /^abc@bridgelabz\.co$/;

function validateEmail(email) {
    return emailPattern.test(email);
}

console.log(validateEmail("abc@bridgelabz.co"));    // true
console.log(validateEmail("abc@xyz.co"));           // false
console.log(validateEmail("abc@bridgelabz.co.in")); // false
console.log(validateEmail("xyz@bridgelabz.co"));    // false
console.log(validateEmail("abc.xyz@bridgelabz.co"));// false
console.log(validateEmail("abc@bridgelabzcom"));    // false
console.log(validateEmail("abc@bridgelabz#co"));    // false
console.log(validateEmail("abc@.co"));              // false
console.log(validateEmail("abc@bridgelabz."));      // false
