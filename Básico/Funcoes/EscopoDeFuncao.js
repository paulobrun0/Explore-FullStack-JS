showMessage("Olá. É bom ter você aqui.!");

function showMessage(message) {
  console.log(message);
  endLine();

  function endLine() {
    console.log("------");
  }
}

showMessage("Ola mundo!");

// A funcao Não existe nesse escopo
// endLine();
