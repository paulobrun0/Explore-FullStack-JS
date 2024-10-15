const ul = document.querySelector("ul");

ul.addEventListener("scroll", (e) => {
  if (ul.scrollTop > 300) {
    ul.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicou");
});
