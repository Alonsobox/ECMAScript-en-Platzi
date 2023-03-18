// Arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;
console.log(a, fruits[1]); // fruits[1] es lo mismo q decir "b"

// object destructuring

let user = {
    username: 'oscar',
    age: 34
}
let  {username, age} = user;

console.log(username, user.age); //user.age es lo mismo que poner solo age


//-------------Esto lo vi  en la caja de comentarios---------
//?     otra manera de acceder a un elemento de un arrays

let frutas = ['Mango', 'Pera', 'Melocoton'];
let [,,fruta] = frutas; // cada coma interpreta cada elemento del array
console.log(fruta);  //! Vota Melocoton





//------Otra Clase----------------
//?         spread operator

let person = {name:'oscar', age: 28};
let country = 'MX';

let data = {...person, country};// los ... traen los elementos del let person
//!prodria ser asi tambien
let data2 = {id: 1, ...person, country};//agregaria el id y los elementos de person

console.log(data);



//? rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3); //el primer 1 es (num), el values comienza apartir del primer 1(se cuenta desde[0])




// un ejemplo de la caja de comentarios
let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)


/// Ejercicio practico de la clase 9!

function solution(
    json1 = {
        name: "Mr. Michi",
        food: "Pescado",
    },
    json2 = {
        age: 12,
        color: "Blanco",
    }
) {
    return {
        ...json1,
        ...json2,
    };
}
console.log(solution());