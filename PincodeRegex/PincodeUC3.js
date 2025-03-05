const pinCodePattern = /^[0-9]{6}$/;

function validatePinCode(pin) {
    return pinCodePattern.test(pin);
}

console.log(validatePinCode("400088"));  // true
console.log(validatePinCode("123456"));  // true
console.log(validatePinCode("A400088")); // false (starts with an alphabet)
console.log(validatePinCode("#400088")); // false (starts with special char)
console.log(validatePinCode("400088B")); // false (ends with an alphabet)
console.log(validatePinCode("400088#")); // false (ends with special char)
console.log(validatePinCode("400O88"));  // false (contains an alphabet)
console.log(validatePinCode("4000889")); // false (more than 6 digits)
console.log(validatePinCode("40008"));   // false (less than 6 digits)
