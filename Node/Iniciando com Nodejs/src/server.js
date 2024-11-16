import httt from "node:http";

const server = httt.createServer((request, response) => {
  // Devolve a resposta e escreve "Hello world!" no console
  return response.end("Resposta do servidor, Sucesso");
});

server.listen(3333);
