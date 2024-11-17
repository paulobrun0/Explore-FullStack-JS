export function index({ request, response, database }) {
  const { status } = request.query;
  console.log(status);

  const tickets = database.select("tickets");
  return response.writeHead(200).end(JSON.stringify(tickets));
}
