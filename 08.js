// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.

multiplicacao = (a, b) => {
  let valor = a;
  if (a > 0 && b > 0) {
    for (i = 1; i < b; i++) {
      valor = valor + a;
    }
    return valor;
  } else {
    return 0;
  }
};

console.log(multiplicacao(5, 3));
console.log(multiplicacao(20, 5));
