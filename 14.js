// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.

objetoParaArray = (a) => {
  return console.log(Object.entries(a));
};

objetoParaArray({
  nome: "Maria",
  profissao: "Desenvolvedora de software",
});
objetoParaArray({
  codigo: 11111,
  preco: 12000,
});
