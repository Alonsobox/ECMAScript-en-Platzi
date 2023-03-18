// esta seria la forma normal de realizar una concatenacion de strings en JS
let hellow = 'Hellow';
let wolrd = 'World';
let epicPhrase = hellow + ' ' + wolrd + '!';

//? esta es la forma de realizar Strings con ECMAScript
//! Template literals

let epicPhrase2 = `${hellow} ${wolrd}!`;
console.log(epicPhrase2);

//---------------------------------------------------------

//? Multi-line strings
                        // el \n es salto de linea
let lorem = 'esto es un strings \n ' + 'esto es otra linea';

//es lo mismo

let lorem2 = `esta es una frase epica
la continuacion de la frase epica`;

console.log(lorem);
console.log(lorem2);
