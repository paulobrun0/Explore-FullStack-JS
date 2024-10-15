const book = {
  title: "Objetos Imútaveis",
  category: "JavaScript",
  author: {
    name: "Maria",
    email: "Maria@email.com",
  },
};

function deepFreeze(object) {
  // Obtém um array com todas as propriedades do objeto
  const props = Reflect.ownKeys(object);

  // Itera sobre todas as propriedades do objeto
  for (const prop of props) {
    // Obtém o valor da propriedade
    const value = object[prop];

    // Verifica se o valor é um objeto ou uma função para continuar aplicando o deepFreeze em objetos aninhados.
    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }
  // Retorna o objeto com todas as propriedades protegidas
  return Object.freeze(object);
}

// chama a função para congelar o objeto com o Deep Freeze (Congelamento profundo)
deepFreeze(book);

book.category = "Java";
book.author.name = "João";
console.log(book);
