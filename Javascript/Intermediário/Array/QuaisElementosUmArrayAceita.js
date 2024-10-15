let myArray = [
  "Um texto",
  10,
  true,
  function () {
    console.log("Uma função");
  },
  {
    nome: "Paulo",
    idade: 30,
  },
];

// texto
console.log(myArray[0]);

// número
console.log(myArray[1]);

// booleano
console.log(myArray[2]);

// função
myArray[3]();

// objeto
console.log(myArray[4]);
