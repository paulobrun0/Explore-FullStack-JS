/**
 * Objetos
 *  - Uma coleção de dados e/ou funcionalidades;
 *  - Podem ter propriedades e métodos;
 */

// Criar um objeto vazio
const obj = {};
console.log(obj);
console.log(typeof obj);

// Criar um objeto com propriedades e métodos
const user = {
  age: 30,
  email: "paulo@gmail.com",
  name: {
    first: "Paulo",
    last: "Silva",
  },
  adress: {
    street: "Rua do Lago",
    number: 123,
    city: "São Paulo",
    state: "SP",
    country: "Brazil",
    postal_code: "01310-000",
  },
  message: () => {
    console.log("Olá, meu nome é Paulo!");
  },
};

// Acessando propriedades e métodos usando a notação de ponto.
console.log(user.email);

// Acessando propiredade de objetos.
console.log(user.name.first);

// Executando método de objetos.
user.message();

// notação de colchetes

console.log(user["name"]["last"]);
user["message"]();
