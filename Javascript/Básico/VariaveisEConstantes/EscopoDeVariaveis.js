// Escopo de variaveis
// console.log(use);
// var use = "Paulo";

// Hoisting
// var use
// console.log(use);

// Escopo Global
var email = "jose@gmail.com";

{
  // Escopo de bloco
  console.log(email);
}

{
  var age = 35;
}

console.log(age);

let address = "Rua Paulista";

{
  address = "Rua da Vila";
  console.log(address);
}
