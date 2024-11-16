export async function jsonBodyHandler(request, response) {
  // Adiciona cada chunk
  const buffer = [];

  // Coleta os chunks de dados da requisição
  for await (const chunk of request) {
    buffer.push(chunk);
  }

  try {
    // Concatenar os chunks e converter para string. Em seguinda, converte a string para  JSON
    request.body = JSON.parse(Buffer.concat(buffer).toString());
  } catch (error) {
    request.body = null;
  }

  // Define o Header de resposta como JSON
  response.setHeader("Content-Type", "application/json");
}
