const book = {
  title: "Objetos Imútaveis",
  category: "JavaScript",
  author: {
    name: "João",
    email: "joao@email.com",
  },
};

// O javascript em sí não impõe restrições à modificação de objetos
// book.category = "Java";

// Congelar o objeto e impede a modificação
Object.freeze(book);
book.category = "Java"; // Não modifica

// O Object.freeze() não impede a modificações profundas em objetos aninhados (shallow freezing)
book.author.name = "Paulo";

console.log(book);
