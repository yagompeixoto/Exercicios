// Criar uma função que receba um array de números e retorne o menor número desse array.

menorNumero = (a) => {
  console.log(Math.min(...a));
};

menorNumero([10, 5, 35, 65]); // retornará 5
menorNumero([5, -15, 50, 3]); // retornará -15
