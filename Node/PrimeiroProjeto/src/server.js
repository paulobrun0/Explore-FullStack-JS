import http from "node:http";
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js";

const server = http.createServer(async (request, response) => {
  await jsonBodyHandler(request, response);
});

server.listen(3333);
