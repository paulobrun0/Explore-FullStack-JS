import http from "node:http";

const server = http.createServer((request, response) => {
  const { method } = request;
  return response.end("Metodo " + method);
});

server.listen(3333);
