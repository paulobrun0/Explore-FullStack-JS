// Break encerra a execução da repetição ou switch par seguir para a instrução seguinte.
// let option = 3;

// switch (option) {
//   case 1:
//     console.log("Cadastrar");
//     break;
//   case 2:
//     console.log("Atualizar");
//     break;
//   case 3:
//     console.log("Remover");
//     break;
//   default:
//     console.log("Opção inválida");
// }

// Utilizando o break para finalizar uma repetição
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
