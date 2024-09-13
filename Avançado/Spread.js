// Spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandida para ser usado onde zero ou mais argumentos

const numbers = [1, 2, 3];
console.log(numbers);

// Spread
console.log(...numbers);

// Criando objeto
const data = [
  {
    name: "John",
    email: "john@example.com",
    avatarUrl: "http://example.com",
  },
  {
    name: "Jane",
    email: "jane@example.com",
    avatarUrl: "http://example.com",
  },
];

console.log(data);

// Utilizando o Spread no array com objetos
console.log(...data);
