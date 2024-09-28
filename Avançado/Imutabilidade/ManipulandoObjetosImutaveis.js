const book = {
  title: "Objetos Imútaveis",
  category: "JavaScript",
  author: {
    name: "João",
    email: "joao@email.com",
  },
};

const updateBook = {
  ...book,
  title: "Css: The Good Parts",
  category: "CSS",
  type: "Programming",
};

// Origial intacto
console.log(book);

// Modificado
console.log(updateBook);

// Utilizando o rest operator (...) para remover propriedades
const { category, ...bookWithoutCategory } = book;
console.log(bookWithoutCategory);
