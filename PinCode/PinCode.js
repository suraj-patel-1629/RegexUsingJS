//const pinCodeRegex = /^[1-9][0-9]{5}$/;
const pinCodeRegex = /^[1-9][0-9]{2}\s?[0-9]{3}$/;
function validatePinCode(pinCode) {
    return pinCodeRegex.test(pinCode);
}


console.log(validatePinCode("400088"));
console.log(validatePinCode("000088"));
//PincodeUC2
console.log(validatePinCode("A400088"));
//PincodeUC3
console.log(validatePinCode("400088B"));