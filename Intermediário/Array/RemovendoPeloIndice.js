let fruits = ["Apple", "Watermelon", "Orange", "Banana"];
console.log(fruits);

// Retorna o indice da posição do elemento na array
let position = fruits.indexOf("Orange");
console.log(position);

// Remove o elemento da posição especificada
fruits.splice(position, 1);
console.log(fruits);
