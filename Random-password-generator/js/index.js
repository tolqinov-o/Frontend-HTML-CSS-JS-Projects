const passwordBox = document.getElementById("random");
const length = 12;

const uppperCase = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
const lowerCase = "abcedefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_-+|{[}]<>/\-=";

const allChars = uppperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += uppperCase[Math.floor(Math.random() * uppperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}