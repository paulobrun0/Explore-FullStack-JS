// While: executa até que a condição seja VERDADEIRA
let execute = true;
while (execute) {
  let response = window.prompt("Deseja continuar: 1 (SIM) ou 2 (Nâo");

  if (response === "2") {
    execute = false;
  }
}
