// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

somarNumeros = (a) => {
  let array = 0;
  for (i = 0; i < a.length; i++) {
    array += a[i];
  }
  return console.log(array);
};
somarNumeros([10, 10, 10]);
somarNumeros([15, 15, 15, 15]);
