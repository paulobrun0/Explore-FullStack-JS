// Shallow Copy (cópia superficial): não pega os itens aninhados.

const htmlCourse = {
  course: "HTML",
  students: [{ name: "João", email: "joao@email.com" }],
};

// const jrCourse = {
//   ...htmlCourse,
//   course: "JavaScript",
// };

// Vai modificar o htmtCourse também students é uma referencia e não uma cópia.
// jrCourse.students.push({ name: "Joana", email: "joana@email.com" });

// Deep Copy (cópia profunda): pega os itens aninhados.
/*
const jrCourse = {
  ...htmlCourse,
  course: "JavaScript",
  students: [...htmlCourse.students],
};

jrCourse.students.push({ name: "Joana", email: "joana@email.com" });
*/

const jrCourse = {
  ...htmlCourse,
  course: "JavaScript",
};
jrCourse.students = [
  ...htmlCourse.students,
  { name: "Joana", email: "joana@email.com" },
];
console.log(htmlCourse, jrCourse);
