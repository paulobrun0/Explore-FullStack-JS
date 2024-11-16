import { routes } from "../routes.js";
import { extractQueryParams } from "../utils/extract-query-params.js";

export function routeHandler(request, response) {
  // Busca a rota correspondente ao método e URL da requisição.
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url);
  });

  if (route) {
    const routeParams = request.url.match(route.path);

    const { query, ...params } = routeParams.groups;

    request.params = params;
    request.query = query ? extractQueryParams(query) : {};

    // Chama o controller da rota correspondente ao método e URL da requisição.
    return route.controller(request, response);
  }

  // Retorna o status 404 e mensagem de erro
  return response.writeHead(404).end("Rota não encontrada");
}
