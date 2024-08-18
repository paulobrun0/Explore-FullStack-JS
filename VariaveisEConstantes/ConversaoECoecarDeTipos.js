/**
 - Conversão de tipos (type casting ou type conversion):
   Ocorre quando você explicitamente transforma um valor de um
   tipo em outro. Isso é feito de forma consciente, usando
   funções ou métodos específicos para realizar a conversão.

 */

let value = "9";
console.log(typeof value);
console.log(typeof Number(value));

let age = 25;
console.log(typeof age);
console.log(typeof age.toString());
console.log(typeof String(age));

let option = 1;
console.log(typeof option);
console.log(Boolean(option)); // retorna true
console.log(typeof Boolean(option));

/**
 - Coerção de tipos:
   Acontece de forma automática (implicitamente). O JavaScript
   tenta automaticamente converter um dos valores para tipo
   compatível antes de realizar a operação.
 */

// Exemplo de coerção de tipos
console.log(typeof ("10" + 2)); // retorna 102
console.log("10" * 2); // retorna 20
console.log("10" - 2); // retorna 8
console.log("10" / 2); // retorna 5
