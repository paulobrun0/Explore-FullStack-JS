import { parseRoutePath } from "./utils/parseRoutePath.js";
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
      const { id } = request.params;
      console.log(request.params.id);
      return response.end("Produto removido com ID: " + id);
    },
  },
].map((route) => ({
  ...route,
  path: parseRoutePath(route.url),
}));
