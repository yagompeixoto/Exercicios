// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:

novoArray = (a) => {
  array = [];
  array.push(a[0]);
  array.push(a.pop());
  return array;
};

novoArray([7, 5, 2, 6, "aasd"]);
console.log(array);
