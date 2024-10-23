export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: (request, response) => {
      response.end("Lista de produtos!");
    },
  },
  {
    method: "POST",
    path: "/products",
    controller: (request, response) => {
      return response.writeHead(201).end(JSON.stringify(request.body));
    },
  },
  {
    method: "DELETE",
    path: "/products/:id",
    controller: (request, response) => {
      return response.end("Removido!");
    },
  },
];
