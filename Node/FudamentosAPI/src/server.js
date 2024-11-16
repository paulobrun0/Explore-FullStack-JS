import http from "node:http";

import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

const server = http.createServer(async (request, response) => {
  // Recebe os dados e aguarda monta a requisição para dai seguir adiante
  await jsonBodyHandler(request, response);

  // Chama o handler de rota
  routeHandler(request, response);
});

server.listen(3333);
