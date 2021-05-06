// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

segundoMaior = (a) => {
  let max = Math.max(...a);
  a.splice(a.indexOf(max), 1);
  console.log(Math.max(...a));
};

segundoMaior([12, 16, 1, 5]); // retornará 12
segundoMaior([8, 4, 5, 6]); // retornará 6
