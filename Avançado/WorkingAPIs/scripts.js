// Utilizando o fetch com o then
// fetch("http://localhost:3333/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// Utilizando o fetch com async/await

async function fetchProducts() {
  const response = await fetch("http://localhost:3333/products");
  const data = await response.json();
  console.log(data);
}

async function fetchProduct(id) {
  const response = await fetch(`http://localhost:3333/products/${id}`);
  const data = await response.json();
  console.log(data);
}

// fetchProducts();
// fetchProduct(2);

const productName = document.getElementById("name");
const productPrice = document.getElementById("price");
const form = document.querySelector("form");

addEventListener("submit", async (e) => {
  e.preventDefault();

  await fetch("http://localhost:3333/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: new Date().getTime().toString(),
      name: productName.value,
      price: parseFloat(productPrice.value),
    }),
  });

  await fetchProducts();
});
