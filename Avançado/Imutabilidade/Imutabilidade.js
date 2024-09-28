const address1 = {
  street: "Av. Paulista",
  number: 20,
};

// Isso não é uma cópia. É uma referência
// const address2 = address1;
// address2.number = 21;

/* Aqui estamos criando um novo objeto utilizando as propriedades e valores de address1 (Opção 1)
const address2 = { ...address1 };
address2.number = 21;*/

// Aqui estamos criando um novo objeto utilizando as propriedades e valores de address1 (Opção 2)

const address2 = { ...address1, number: 21 };

console.log(address1, address2);

const list1 = ["apple", "banana"];

// Exemplo de referencia de array
// const list2 = list1;
// list2.push("orange");

const list2 = [...list1]; // ou const list2 = [...list1, "orange"];
list2.push("orange");

console.log(list1, list2);
