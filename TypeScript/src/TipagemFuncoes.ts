function sum(x: number, y: number) {
  const result = x + y;
  console.log("Resultado = " + result);
  return result;
}

const result = sum(10, 20);

const showMessage = (name: string): string => {
  const message = "Olá " + name;

  return message;
};

showMessage("Rodrigo Gonçalves");
