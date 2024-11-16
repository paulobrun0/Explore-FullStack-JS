import { routes } from "../routes.js";

export function routeHandler(request, response) {
  // Busca a rota correspondente ao método e URL da requisição.
  const route = routes.find((route) => {
    return route.method === request.method && route.url === request.url;
  });

  if (route) {
    // Chama o controller da rota correspondente ao método e URL da requisição.
    return route.controller(request, response);
  }

  // Retorna o status 404 e mensagem de erro
  return response.writeHead(404).end("Rota não encontrada");
}
