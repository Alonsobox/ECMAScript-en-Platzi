var lastName = 'Alonso';
lastName = 'Oscar';
console.log(lastName);

//!

let fruit = 'Apple';
fruit = 'Mango';
console.log(fruit);

//?

const animal = 'Dog';
animal = 'pepe';
console.log(animal);


// ejecicio 

const fruits = () => {
    if(true){
        var fruit1 = 'Apple'; //funcion scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();