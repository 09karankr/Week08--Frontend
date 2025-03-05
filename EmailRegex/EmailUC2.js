const emailPattern = /^abc@bridgelabz\.co$/;

function validateEmail(email) {
    return emailPattern.test(email);
}

console.log(validateEmail("abc@bridgelabz.co"));      // true ✅
console.log(validateEmail("abc@xyz.co"));             
console.log(validateEmail("abc@bridgelabz.co.in"));   
console.log(validateEmail("xyz@bridgelabz.co"));      
console.log(validateEmail("abc.xyz@bridgelabz.co"));  
console.log(validateEmail("abc@bridgelabzcom"));      
console.log(validateEmail("abc@bridgelabz#co"));      
console.log(validateEmail("abc@.co"));              
console.log(validateEmail("abc@bridgelabz."));       
