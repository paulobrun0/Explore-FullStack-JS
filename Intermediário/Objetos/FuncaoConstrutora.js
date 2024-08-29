function createProduct(name) {
  const product = {};

  product.name = name;
  product.details = function () {
    console.log(`O nome do produto é ${this.name}`);
  };

  return product;
}

// O new cria um novo objeto utilizando a estrutura da função construtora
const product1 = new createProduct("Notebook");
console.log(product1.name);
product1.details();

const product2 = new createProduct("Iphone 15");
console.log(product1.name);
product2.details();

// console.log(product1 === product2);

// Exempços de funções construturas disponíveis no próprio javascript
let myName = new String("Paulo");
console.log(myName);

let price = "40.6".replace(".", "");
console.log(price);

let date = new Date("2015-12-25");
console.log(date);

function Person(name) {
  this.name = name;
  this.message = function () {
    console.log(`Olá, meu nome é ${this.name}`);
  };
}

const person1 = new Person("Paulo");

console.log(person1.name);
person1.message();
