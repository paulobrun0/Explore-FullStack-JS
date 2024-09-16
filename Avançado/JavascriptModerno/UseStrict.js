// O strict mode (modo estrito) : ativando esse modo, os erros que era silenciosos passam a gerar exceções no Javascript.

"use strict";

function showMessage() {
  let persoName = "Paulo Bruno";
  console.log(persoName);
}

showMessage();

class Student {
  get point() {
    return 7;
  }
}

let student1 = new Student();
// student1.point = 10;

console.log(student1.point);

// Tentando deletar uma propriedade de um objeto que não posso deletar
// delete window.document

// Quando passamos parâmetros duplicados
// function sum(a, a, c) {
//   return a + a + c;
// }

// const result = sum(1, 3, 2); // Resultado 8, ultimo paramentro sobrepoe o primeiro

// console.log("Resultado", result)
