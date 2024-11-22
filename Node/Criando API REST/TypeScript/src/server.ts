import express from "express";

const PORT = 3333;

const app = express();

app.get("/products/:id/:user", (request, response) => {
  // Pega o id do produto
  const { id, user } = request.params;

  // Devolve a resposta
  response.send(`Produto ${id} do usuário ${user} `);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
