const guests = document.querySelector("ul");

const newGuest = document.createElement("li");
newGuest.classList.add("guest");

const guestName = document.createElement("span");

guestName.textContent = "Paulo";

const guestSurname = document.createElement("span");
guestSurname.textContent = "Bruno";

// Adiciona após o último filho
// newGuest.append(guestName, guestSurname);

// Adiciona antes do primeiro filho
// newGuest.prepend(guestSurname);

// É mais simples que o append e aceita apenas um elemento
newGuest.appendChild(guestName);

guests.appendChild(newGuest);
