import http from "node:http";

import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js";

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  // Recebe os dados e aguarda monta a requisição para dai seguir adiante
  await jsonBodyHandler(request, response);

  if (method === "GET" && url === "/products") {
    return response.end("Lista de Produtos");
  }

  if (method === "POST" && url === "/products") {
    // Retorna o status 201 e o JSON da requisição
    return response.writeHead(201).end(JSON.stringify(request.body));
  }

  return response.writeHead(404).end("Rota não encontrada");
});

server.listen(3333);
