//Continue encerra (PULA) a execução das intruções na iteração atual e continua a execução do loop com a próxima iteração

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i); // Este número não será impresso, pois ele foi "continuado"
}
