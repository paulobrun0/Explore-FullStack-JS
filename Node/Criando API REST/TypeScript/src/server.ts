import express from "express";

const PORT = 3333;

const app = express();

app.use(express.json());

app.get("/products", (request, response) => {
  // products?page=1&limit=10

  // Pegando os parametros da requisição

  const { page, limit } = request.query;

  // Devolve a resposta
  response.send(`Página ${page} de ${limit}`);
});

app.post("/products", (request, response) => {
  const { name, price } = request.body;

  response.send(`Produto ${name} com preço de ${price}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
