const creditCard = "1234567812344928";
// console.log(creditCard.length);

// Pega os 4 ultimos digitos
const lastDigits = creditCard.slice(-4);

// O padStart preenche a string do inicio
const maskedNumber = lastDigits.padStart(creditCard.length, "X");

console.log(maskedNumber); // Output: XXXXX4928

// O padStart preenche a string no final
const number = "123";
console.log(number.padEnd(10, "#")); // Output:
