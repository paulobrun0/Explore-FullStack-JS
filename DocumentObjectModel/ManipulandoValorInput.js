const input = document.querySelector("input");
const form = document.querySelector("form");

// input.addEventListener("input", (e) => {
//   const value = input.value;
//   const regex = /\D+/g;

//   // retorna o padrao encontrado na string
//   // console.log(value.match(regex));

//   // Testa se o padrao é válido
//   // const isValid = regex.test(value);
//   // console.log(isValid);
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  const regex = /\D+/g;

  if (regex.test(value)) {
    console.log("Padrao encontrado");
  } else {
    console.log("Padrao não encontrado");
  }
  // const value = input.value.replace(regex, "");
  // console.log(value);
});
