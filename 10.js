// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.

repetir = (a) => {
  let resu = "";
  for (i = 0; i < a; i++) {
    resu = resu.concat(`+`);
  }
  return resu;
};

console.log(repetir(6));
