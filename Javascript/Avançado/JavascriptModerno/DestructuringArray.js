// destructuring assignment(desestruturação) permite extrair dados de um array ou objeto em variáveis distintas

const data = ["Paulo Bruno", "paulo@gmail.com"];

// Desestruturando array
const [userName, email] = data;
console.log("Nome:", userName);
console.log("Email:", email);

const fruits = ["Banana", "apple", "Orange"];

// Desestruturar somente o primeiro
const [banana] = fruits;

console.log("Fruta:", banana);

// Ignorando o primeiro na desestruturação

const [_, apple] = fruits;
console.log("Segunda fruta:", apple);

// Ignorando o primeiro e o segundo na desestruturação

const [, , orange] = fruits;
console.log("Terceira fruta:", orange);
