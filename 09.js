// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.

repetir = (a, b) => {
  let valor = [];
  for (i = 0; i < b; i++) {
    valor.push(a);
  }
  return valor;
};

console.log(repetir("palavra", 6));
