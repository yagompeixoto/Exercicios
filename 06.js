// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
// retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
// de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
// tipo ...".

function inverso(a) {
  if (typeof a === "boolean") {
    console.log(!a);
  } else if (typeof a === "number") {
    console.log(a * -1);
  } else
    console.log(
      "Booleano ou número esperado mas o parametro é do tipo " + typeof a
    );
}

inverso(false);
inverso(-5);
inverso("5");
