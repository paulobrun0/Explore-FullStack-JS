// O método filter() cria um novo array com todos os elementos que passaram na condição.

const words = ["Javascript", "HTML", "CSS", "NodeJS", "React"];

const result = words.filter((word) => {
  return word.length > 5;
});

console.log(result);

const pessoas = [
  {
    nome: "João",
    idade: 20,
    sexo: "Masculino",
    salary: 1000,
  },
  {
    nome: "Maria",
    idade: 18,
    sexo: "Feminino",
  },
  {
    nome: "Pedro",
    idade: 25,
    sexo: "Masculino",
    salary: 1300,
  },
  {
    nome: "Ana",
    idade: 30,
    sexo: "Feminino",
  },
  {
    nome: "Carlos",
    idade: 35,
    sexo: "Masculino",
    salary: 1200,
  },
];

const salaryHigherThan1100 = pessoas.filter((pessoa) => {
  return pessoa.salary >= 1200;
});

console.log(salaryHigherThan1100);

const products = [
  {
    description: "Teclado",
    price: 150,
    promotion: true,
  },
  {
    description: "Mouse",
    price: 50,
    promotion: false,
  },
  {
    description: "Monitor",
    price: 200,
    promotion: true,
  },
];

const promotion = products.filter((product) => {
  return product.promotion === true;
});

console.log(promotion);

// Utilizando o map e o filter para mudar a se o item ta ou nao em promoção

promotion.map((product) => {
  product.promotion = false;
});

console.log(promotion);
