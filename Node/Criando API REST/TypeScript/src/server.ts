import express from "express";

const PORT = 3333;

const app = express();

app.get("/products", (request, response) => {
  // products?page=1&limit=10

  // Pegando os parametros da requisição

  const { page, limit } = request.query;

  // Devolve a resposta
  response.send(`Página ${page} de ${limit}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
