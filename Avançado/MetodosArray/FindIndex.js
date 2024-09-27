// O método findIndex() retorna o indice no array do primeiro elemento que satisfizer a condição. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

const values = [4, 6, 8, 12];

// Obtendo o primeiro indice do elemento que é maior que 4.
const index = values.findIndex((value) => value > 4);
console.log(index);
console.log(values[index]);

// Exemplo de quando não encontra.
console.log(values.findIndex((value) => value > 12));
