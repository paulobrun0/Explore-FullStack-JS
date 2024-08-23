window.addEventListener("load", () => {
  console.log("A página foi carregada!");
});

addEventListener("click", (e) => {
  e.preventDefault();

  // Retorna todas as inforamções do evento.
  console.log(e);

  // Retorna o elemento clicado.
  console.log(e.target);

  // Retorna o texto do elemento clicado.
  console.log(e.target.textContent);
});
