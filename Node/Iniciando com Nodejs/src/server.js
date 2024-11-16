import httt from "node:http";

const server = httt.createServer((request, response) => {
  // Devolve a resposta e escreve "Hello world!" no console
  return response.end("Hello World!");
});

server.listen(3333);
