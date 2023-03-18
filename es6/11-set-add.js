const lista = new Set();

lista.add('Items1');
lista.add('Items2').add('Items3');//agregando solo .add haces lo mismo


console.log(lista);

// -----------
//? Cómo quitar los elementos repetidos en una sola línea

const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]