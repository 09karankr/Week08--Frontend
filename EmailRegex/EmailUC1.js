const emailPattern = /^abc@[a-zA-Z0-9.-]+\.co$/;

function validateEmail(email) {
    return emailPattern.test(email);
}

console.log(validateEmail("abc@bridgelabz.co"));      // true
console.log(validateEmail("abc@xyz.co"));             // true
console.log(validateEmail("abc@bridgelabz.co.in"));   // false (extra part not yet handled)
console.log(validateEmail("xyz@bridgelabz.co"));      // false (does not start with abc)
console.log(validateEmail("abc.xyz@bridgelabz.co"));  // false (dot-separated part not yet handled)
console.log(validateEmail("abc@bridgelabzcom"));      // false (missing dot before co)
console.log(validateEmail("abc@bridgelabz#co"));      // false (special char not allowed)
console.log(validateEmail("abc@.co"));               // false (missing domain name)
console.log(validateEmail("abc@bridgelabz."));       // false (incomplete domain)
