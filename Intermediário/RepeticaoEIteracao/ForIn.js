// For...in executa iterações a partir de um objeto e percorrer as propriedades

let person = {
  name: "John",
  surname: "silva",
  email: "jonhsilva@gmail.com",
};

for (let property in person) {
  //Exibe o nome da propriedade
  // console.log(property);

  // Exibe o conteúdo da propriedade
  console.log(person[property]);
}

let students = ["John", "Mary", "Paul", "George"];

for (let student in students) {
  console.log(students[student]);
}
