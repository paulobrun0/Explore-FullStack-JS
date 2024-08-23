const input = document.querySelector("input");

// keydow event
// input.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

//keypress event
input.addEventListener("keypress", (e) => {
  console.log(e.target.value);
});

input.onchange = () => inputChange();

function inputChange(e) {
  console.log("input mudou o valor");
}
