import http from "node:http";

const server = http.createServer((request, response) => {
  const { method } = request;
  return response.writeHead(200).end("Metodo " + method);
});

server.listen(3333);
