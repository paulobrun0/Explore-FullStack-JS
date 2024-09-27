// o método every() testa se todos os elementos do array passam na condição e retorna um valor booleano.

// Exemplo de arrays de idades.
const ages = [18, 15, 25, 28];

// Verificar se todas as idades são maiores ou igual a 18.
const result = ages.every((age) => {
  return age >= 18;
});

console.log(result);
