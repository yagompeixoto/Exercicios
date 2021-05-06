// Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
//   exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

function mes(numero) {
  switch (numero) {
    case 1:
      console.log("Janeira");
      break;
    case 2:
      console.log("Fevereiro");
      break;
    case 3:
      console.log("Março");
      break;
    default:
      console.log("Digite um numero");
  }
}
mes(3);
