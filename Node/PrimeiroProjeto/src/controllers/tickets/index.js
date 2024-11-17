export function index({ request, response, database }) {
  const { status } = request.query;

  const filters = status ? { status: status } : null;

  const tickets = database.select("tickets", filters);
  return response.writeHead(200).end(JSON.stringify(tickets));
}
