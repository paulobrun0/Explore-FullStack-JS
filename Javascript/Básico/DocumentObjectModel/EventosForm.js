const form = document.querySelector("form");

form.onsubmit = (e) => {
  e.preventDefault();
  console.log("Você fez submit no form");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Você fez submit no form #1");
});
