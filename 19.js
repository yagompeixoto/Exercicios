// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
// pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
// usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
// indeterminada de números e retorne a média simples desses números.

calcularMedia = (a) => {
  let array = 0;
  for (i = 0; i < a.length; i++) {
    array += a[i];
  }
  return console.log(array / a.length);
};

calcularMedia([0, 10]);
calcularMedia([1, 2, 3, 4, 5]);
