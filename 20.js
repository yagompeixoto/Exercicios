// Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
// deverá ser de duas casas decimais, arredondando se necessário.

areaDoTriangulo = (base, altura) => {
  let resultado = 0;

  resultado = (base * altura) / 2;

  console.log(resultado.toFixed(2));
};

areaDoTriangulo(10, 15); // retornará 75.00
areaDoTriangulo(7, 9); // retornará 31.50
areaDoTriangulo(9.25, 13.1); // retornará 60.59
