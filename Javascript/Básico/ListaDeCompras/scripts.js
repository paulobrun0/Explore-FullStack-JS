const inputText = document.querySelector("input");
const submit = document.querySelector("button");
const titleTask = document.querySelectorAll("span");
const trashs = document.querySelectorAll(".trash");
const ul = document.querySelector("ul");

const li = document.createElement("li");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (!inputText.value) return;

  const newElement = createElement();

  ul.appendChild(newElement);

  inputText.value = "";
  deleteTask();
});

function createElement() {
  li.innerHTML = `<input type="checkbox" /> <span>${inputText.value}</span>
    <img class="trash" src="img/trash.svg" alt="" />`;

  return li;
}

function deleteTask() {
  const trash = li.querySelector(".trash");

  trash.addEventListener("click", () => {
    li.remove();
  });
}
