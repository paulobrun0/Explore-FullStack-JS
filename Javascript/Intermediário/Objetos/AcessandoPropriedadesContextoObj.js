const user = {
  name: "Paulo",
  message: function () {
    // console.log(`Olá, meu nome é ${user.name}`);
    console.log(`Olá, meu nome é ${this.name}`); // Acessando a propriedade 'name' usando 'this'. So funciona com function, arrow function nao funciona o this
  },
};

user.message();
