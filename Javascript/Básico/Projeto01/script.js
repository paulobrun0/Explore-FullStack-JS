const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const amount = document.getElementById("amount");
const form = document.querySelector("form");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.querySelector("main footer span");
const result = document.querySelector("main footer h1");

// Manipulando o input amount para receber somente números
amount.addEventListener("input", (e) => {
  const hasCharactersRegex = /\D+/g;

  amount.value = amount.value.replace(hasCharactersRegex, "");
});

form.onsubmit = (e) => {
  e.preventDefault();

  if (amount.value === "0") {
    alert("Valor inválido. Por favor, insira um valor maior que zero.");
    return;
  }

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
    default:
      break;
  }
};

// Função para a moeda

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formartCurrencyBRL(price)}`;

    let total = (amount * price).toFixed(2);

    total = formartCurrencyBRL(total).replace("R$", "");

    result.textContent = `${total} Reais`;

    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);
    footer.classList.remove("show-result");
    alert("Erro ao converter");
  }
}

function formartCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
