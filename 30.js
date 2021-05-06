// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
// num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
// com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.

recerberMelhorEstudante = (estudantes) => {
  newArray = [];
  topo = {};
  for (var key of Object.keys(estudantes)) {
    avg = 0;
    for (i = 0; i < estudantes[key].length; i++) {
      avg += estudantes[key][i];
    }

    newArray.push({ nome: key, media: avg / estudantes[key].length });
    topo = newArray[0];
    for (h = 0; h < newArray.length; h++) {
      if (topo.media < newArray[h].media) {
        topo = newArray[h];
      }
    }
  }
  console.log(topo);
};

recerberMelhorEstudante({
  Joao: [8, 7.6, 8.9, 6], // média 7.625
  Mariana: [9, 6.6, 7.9, 8], // média 7.875
  Carla: [7, 7, 8, 9], // média 7.75
}); // retornará { nome: "Mariana", media: 7.875 }
