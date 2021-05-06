// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.

pares = (a) => {
  let newArray = [];
  for (i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0 && a.indexOf(a[i]) % 2 == 0) {
      newArray.push(a[i]);
    }
  }
  console.log(newArray);
};
pares([1, 2, 3, 4]);
pares([10, 70, 22, 43]);
