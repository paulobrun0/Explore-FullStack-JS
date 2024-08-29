const user = {
  id: 1,
  name: "Paulo",
  // adress: {
  //   street: "Avenida Brasil",
  //   city: "Rio de Janeiro",
  //   geo: {
  //     lat: 22.99,
  //     long: -43.19,
  //   },
  // },
  message: function () {
    console.log(`Olá, ${this.name}!`);
  },
};

// Encadeamento opcional (Optional chaining)

console.log(user?.adress?.street);

user?.message();
