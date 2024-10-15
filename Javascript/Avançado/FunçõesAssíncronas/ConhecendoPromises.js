// Função que retorna uma Promise.
function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma opera assíncrona.
    setTimeout(() => {
      const isSuccess = true;

      if (isSuccess) {
        resolve("A operação foi concluída com sucesso.");
      } else {
        reject("Algo deu errado.");
      }
    }, 3000); // Simula um tempo de espera de 3 segundos.
  });
}

// Visualizando que o retorno é uma Promise.
// console.log(asyncFunction());

asyncFunction()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Fim da execução"); // Executa quando a Promise é concluída.
  });
