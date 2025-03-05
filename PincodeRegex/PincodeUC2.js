const pinCodePattern = /^[0-9]{6}$/;

function validatePinCode(pin) {
    return pinCodePattern.test(pin);
}

console.log(validatePinCode("400088"));  // true
console.log(validatePinCode("123456"));  // true
console.log(validatePinCode("A400088")); // false
console.log(validatePinCode("#400088")); // false
console.log(validatePinCode("40008"));   // false (only 5 digits)
console.log(validatePinCode("4000889")); // false (more than 6 digits)
console.log(validatePinCode("400O88"));  // false (contains alphabet)
