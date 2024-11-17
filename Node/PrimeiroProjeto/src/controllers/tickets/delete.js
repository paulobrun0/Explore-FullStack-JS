export function deleteTicket({ request, response, database }) {
  const { id } = request.params;

  database.delete("tickets", id);

  return response.end();
}
