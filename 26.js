// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
// consoantes, ou seja, sem as vogais.

removerVogais = (a) => {
  console.log(a.replace(/[aeiou]/gi, ""));
};

removerVogais("Cod3r"); // retornará "Cd3r"
removerVogais("Fundamentos"); // retornará "Fndmnts"
