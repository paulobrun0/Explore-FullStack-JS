// Rest params (...) permite representar um número indefinido de argumentos como um array

function values(a, ...rest) {
  // Mostra a quantidade de parâmetros
  console.log(rest.length);

  // Exibindo o contéudo do array
  console.log(...rest);

  // Exibe o contéudo do rest que é um array
  console.log(rest);
}

values(1, 2, 3, 4, 5); // 1
