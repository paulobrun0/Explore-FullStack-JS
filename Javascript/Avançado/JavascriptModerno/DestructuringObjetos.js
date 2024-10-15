const product = {
  description: "Teclado",
  price: 100,
};

const { description, price } = product;
console.log("Nome do produto:", description);
console.log("Preço: R$", price);

function newProduct({ description, price }) {
  console.log("### NOVO PRODUTO ###");
  console.log("Nome do produto:", description);
  console.log("Preço: R$", price);
}

newProduct({
  description: "Mouse",
  price: 70,
});
