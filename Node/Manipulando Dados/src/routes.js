import { parseRoutePath } from "./utils/parseRoutePath.js";
export const routes = [
  {
    method: "GET",
    url: "/products",
    controller: ({ request, response, database }) => {
      const products = database.select("products");

      return response.end(JSON.stringify(products));
    },
  },
  {
    method: "POST",
    url: "/products",
    controller: ({ request, response, database }) => {
      const { name, price } = request.body;

      database.insert("products", { name, price });

      return response.writeHead(201).end();
    },
  },
  {
    method: "DELETE",
    url: "/products/:id",
    controller: ({ request, response }) => {
      const { id } = request.params;
      return response.end("Produto removido com ID: " + id);
    },
  },
].map((route) => ({
  ...route,
  path: parseRoutePath(route.url),
}));
