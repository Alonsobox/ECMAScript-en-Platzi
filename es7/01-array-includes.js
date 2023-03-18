let number = [1,3,4,6,7,8];

console.log(number.includes(4));// .includes(pregunta si esta el valor num4)

const list = ['oscar','David','Ana'];

console.log(list.includes('oscar'));


// ---------------

//? -----------------------------------------
//!          Lo vi en los comentarios 
//? ------------------------------------------


const letras = { a: 1, b: 2, c: 3 }

console.log("a" in letras) // true
console.log(letras.hasOwnProperty("a")) // true
console.log(Object.hasOwn(letras, "a")) // true


// ----------

const letra = { a: 1, b: 2, c: 3 }

console.log("toString" in letra) // true
console.log(letra.hasOwnProperty("toString")) // false
console.log(Object.hasOwn(letra, "toString")) // false