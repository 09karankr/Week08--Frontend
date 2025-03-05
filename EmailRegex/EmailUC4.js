const emailPattern = /^abc([._+,-][a-zA-Z0-9]+)?@bridgelabz\.co$/;

function validateEmail(email) {
    return emailPattern.test(email);
}

console.log(validateEmail("abc@bridgelabz.co"));       // true
console.log(validateEmail("abc.xyz@bridgelabz.co"));   // true
console.log(validateEmail("abc-xyz@bridgelabz.co"));   // true
console.log(validateEmail("abc+xyz@bridgelabz.co"));   // true
console.log(validateEmail("abc_xyz@bridgelabz.co"));   // true
console.log(validateEmail("abc,xyz@bridgelabz.co"));   // true
console.log(validateEmail("abc@xyz.co"));              // false
console.log(validateEmail("abc@bridgelabz.co.in"));    // false (extra part not yet handled)
console.log(validateEmail("xyz@bridgelabz.co"));       // false (must start with abc)
console.log(validateEmail("abc#xyz@bridgelabz.co"));   // false (invalid special character #)
console.log(validateEmail("abc@bridgelabzcom"));       // false (missing dot before co)
console.log(validateEmail("abc@.co"));                 // false
console.log(validateEmail("abc@bridgelabz."));         // false
