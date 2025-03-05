const pinCodePattern = /^400088$/;

function validatePinCode(pin) {
    return pinCodePattern.test(pin);
}

console.log(validatePinCode("400088")); // true
console.log(validatePinCode("123456")); // false
console.log(validatePinCode("40008"));  // false
console.log(validatePinCode("4000889")); // false
