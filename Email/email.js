const emailRegex = /^abc([._\+\-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})+$/;

function validateEmail(email) {
    return emailRegex.test(email);
}


console.log(validateEmail("abc@bridgelabz.co"));
console.log(validateEmail("abc@bridgelabz.co.in"));
console.log(validateEmail("abc.xyz@bridgelabz.co.in"));
console.log(validateEmail("abc-xyz@bridgelabz.co.in"));
console.log(validateEmail("abc_xyz@bridgelabz.co.in"));
console.log(validateEmail("abc+xyz@bridgelabz.co.in"));

console.log(validateEmail("xyz@bridgelabz.co"));
console.log(validateEmail("abc@xyz.co"));