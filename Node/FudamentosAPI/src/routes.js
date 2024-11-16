export const routes = [
  {
    method: "GET",
    url: "/products",
    controller: (request, response) => {
      return response.end("Lista de Produtos");
    },
  },
  {
    method: "POST",
    url: "/products",
    controller: (request, response) => {
      // Retorna o status 201 e o JSON da requisição
      return response.writeHead(201).end(JSON.stringify(request.body));
    },
  },
  {
    method: "DELETE",
    url: "/products/:id",
    controller: (request, response) => {
      return response.end("Removido");
    },
  },
];
