import http from "node:http";

const server = http.createServer((request, response) => {
  return response.end("Meu primeiro servidor com NodeJS");
});

server.listen(3333);
