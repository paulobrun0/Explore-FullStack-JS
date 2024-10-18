let user: { name: string; age: number; urlAvatar?: string } = {
  name: "John Doe",
  age: 30,
};

/*
function signIn(email: string, password: string) {
    // Lógica de conectar usuário na aplicação
}

signIn("rodrigo@email.com", "123")
*/

function signIn({ email, password }: { email: string; password: string }) {
  // Lógica de conectar usuário na aplicação
  console.log("Usuário " + email + " conectado!");
}

signIn({ email: "rodrigo@email.com", password: "123" });
