// (*)para reconocer que la funcion es un generador
function* iterate(array){  //parametros arreglo
    for(let value of array){
        yield value;
    }
}
const it = iterate(['Alonso','David','ANA','Pako','Ramon']);
console.log(it.next().value);   //Alonso
console.log(it.next().value);   //David
console.log(it.next().value);   //ANA
console.log(it.next().value);   //Pako
console.log(it.next().value);   //Ramon