const passwordLength = document.getElementById('password-length');
const includeSymbols = document.getElementById('include-symbols');
const includeNumbers = document.getElementById('include-numbers');
const includeUppercase = document.getElementById('include-uppercase');
const includeLowercase = document.getElementById('include-lowercase');
const generatePassword = document.getElementById('generate-password');
const generatedPassword = document.getElementById('generated-password');

const symbols = '!@#$%^&*(){}[]=<>/,.';
const numbers = '1234567890';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';

generatePassword.addEventListener('click', () => {
    const length = +passwordLength.value;
    let chars = '';
    includeSymbols.checked ? (chars += symbols) : '';
    includeNumbers.checked ? (chars += numbers) : '';
    includeUppercase.checked ? (chars += uppercase) : '';
    includeLowercase.checked ? (chars += lowercase) : '';

    generatedPassword.value = generatePass(length, chars);
});

function generatePass(length, chars) {
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}