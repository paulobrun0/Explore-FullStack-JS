import http from "node:http";

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/products") {
    return response.end("Lista de Produtos");
  }

  if (method === "POST" && url === "/products") {
    const buffer = [];

    // Recebe dados do body
    for await (const chunk of request) {
      buffer.push(chunk);
    }

    // Converte buffer para string de forma legível
    console.log(Buffer.concat(buffer).toString());

    return response.writeHead(201).end("Produto Cadastrado!");
  }

  return response.writeHead(404).end("Rota não encontrada");
});

server.listen(3333);
