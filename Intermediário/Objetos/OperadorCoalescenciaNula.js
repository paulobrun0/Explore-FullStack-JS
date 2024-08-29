let content = "test";
// Funciona apenas com null ou undefined
//Operador de coalescência nula
console.log(content ?? "Conteúdo Padrao");

const user = {
  name: "Paulo",
  picture: undefined,
};

console.log(user.picture ?? "default.png");
