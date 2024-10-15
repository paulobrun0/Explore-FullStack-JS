// O método map() chama a função callback recibida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornoos de cada chamada. E no final, devolve um novo array.

const products = ["teclado", "mouse", "notebook"];

// Percorrer os itens do array
products.map((product) => {
  console.log(product);
});

// Seintaxe reduzida
products.map((product) => console.log(product));

// Utilizando o novo objeto retornado
const formatted = products.map((product) => {
  // return product.toUpperCase();

  return {
    id: Math.random(),
    description: product,
  };
});

console.log(formatted);
