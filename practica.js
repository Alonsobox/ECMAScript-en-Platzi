let precio = 100;
let iva = 21;

let total =precio + precio*21/100
console.log(total);

// -------------

let lado = 40;

let area = + lado * lado;

let perimetro =  lado * 4;

console.log('el area es ' +area);
console.log('el perimetro es '+  perimetro);


// -------------

let nombre = prompt('Escribe tu nombre') ;
let saludo = 'Hola'+'  '  + nombre;
console.log(saludo);

// ---------
//          el parseInt(para que reconozca que son numero Int)
let Numb1 = parseInt(prompt('Numero 1'));
let Numb2 = parseInt(prompt('Numero 2'));
let Numb3 = parseInt(prompt('Numero 3'));
let suma = Numb1+Numb2+Numb3;
let media = suma/3;
console.log(media);


// -------------

let kilometros= parseInt(prompt('Kilometros recorridos?'));
let litros = parseInt(prompt('Litros'));
let consumido = litros / kilometros;
console.log(consumido);


// ---------

let segundos = 60;
let minutos = segundos * 60;
let hora = minutos * 60;
/// no entendi mala traduccion


// ----------

var comensales, papas, huevos, cebolla;
comensales= parseInt(prompt('comenzales'));
papas = comensales *200;
papas = papas /1000; //divide 1000 / 1000 por que debe quedar 1kilo
huevos = papas*5;
cebolla = papas*300;
console.log('patatas  '+ papas + ' kilos');
console.log('huevos '+huevos);
console.log('cebolla  '+cebolla + ' gramos');


// ----------

var varUno = 10;
var varDos = 30;
console.log('varUno es: '+varUno);
console.log('varDos es : '+varDos);
console.log('       ')
console.log('       ')
var aux = varUno; // aki guardo el VarUno(con valor de 10)
varUno = varDos; // aki le cambio el valor a varUno diciendo que es igual a 30
varDos = aux;
console.log('varUno es: '+varUno);
console.log('varDos es: ' +varDos);

// -----------

var num = parseInt(prompt("Entrar numero entero"));
var res = num%2;
var par = res==0;//sale verdadero(numero par o impar)
console.log("¿Es par? " + par);



///-----------Condicionales-------------


let numero = parseInt(prompt("NUMERO"));
let resto = numero%2;
if (resto === 0){
    alert(numero+" es par");
}
else{ alert(numero+" es impar"); }


// -----------------

let num = parseInt(prompt("Ingrese Numero"));
if(num>=0){
    alert('Es Positivazooo');
}
else{
    alert('Tas Negativo')
}

// ------------------

let num1 = parseInt(prompt("Ingrese Numero 1"));
let num2 = parseInt(prompt("Ingrese Numero 2"));
let rest ;

if(num2 != 0){
    rest = num1/num2;
    alert(num1 + "/" + num2+ "="+ rest)
}
else {
    alert('No valido');
}

// ------------

let usuario1 = parseInt(prompt("Ingrese un valor"));
let usuario2 = parseInt(prompt("Ingrese un valor"));

if(usuario1>usuario2){
    alert(usuario1 + " Es Mayor")
}
else{
    alert(usuario2 + " Es Mayor")
}
//?Otra respuesta //Se trata de usar el if resumido (cond?true:false)
var nume1, nume2, mayor;
nume1 = prompt("Pimer número");
nume2 = prompt("Segundo número");
//  =>         ( cond ? true     : false)
mayor = (nume1>nume2) ? "primer" :"segundo";
alert( "El mayor es el " +mayor + " número");


// --------------
let numer,cuadrado,verda;
numer = parseInt(prompt("Ingresa tu numero"));
cuadrado = parseInt(prompt("Ingresa tu cuadrado"));
verda = (cuadrado == numer*numer) ? "Correcto" : "error";
alert ("Resultado: "+ verda)


// -----------------------
let compra;
let descuento;
let final;
compra = parseInt(prompt("Conto de la compra"));
if(compra<100){
    alert('No hay DESCUENTO')
}
else if(compra>=100 && compra<300){
    descuento = 5;
}else if(compra>300 && compra<500){
    descuento = 10;
}
else{
    descuento = 15;
}
final = compra * (1- descuento/100);
alert("Debe pagar: "+ final + "$");

// ---------------
let nota= parseInt(prompt('Ingresa tu nota'));
let msq;
switch(true){
    case (nota<5):
        msq='Supuesto';break;
    case (nota>=5 && nota<=6):
        msq='Aprobado';break;
    case (nota>=7 && nota<=8):
        msq='Notable';break;
    case(nota>=9 && nota<=10):
        msq='Sobresaliste';break;
    default:
        alert('Ingresa un numero del 1 al 10');
}
alert('Tu calificacion es: '+msq);



// --------------------Condicionales 2


let edad = parseInt(prompt('Ingrese edad'));

if(edad>=18 && edad < 30 ){
    alert('Tienes '+edad+' puedes entrar');
}else{
    alert('Tu edad es '+edad+' no puedes entrar');
}

//? ------- otra forma de resolverlo
let Edad = parseInt(prompt('Ingrese edad'));

rpt=(Edad>=18)?'Puedes Entrar':'No puedes entrar'+Edad;
alert(rpt)


// -------------

let cliente = prompt('Ingrese Menu');

switch(cliente){
    case 'carne':
        alert('bebida vino tinto');break;
    case 'pescado':
        alert('Vino blanco');break;
    case 'verdura':
        alert('se le ofrece agua');break;
    default:
        alert('Ingrese uno de los tipos de menu')
}

// ----------------------------

let Numero = parseInt(prompt('Ingrese numero'));
let msg='';
for(let i = 0; i <= Numero;i++){// i=0(inicia en 0), i es menor o igual que numero, si es menor aumenta 1
    msg += i +','
}

alert(msg);



// ---------------------muestra los numero pares, por debajo del numero que ingreses
let Ingreso = parseInt(prompt('Ingresa tu numero'));
let par=0;
msg=' ';
for(let i= 1;par<Ingreso;i++){
    msg += par + "\n";
    par = i*2;
}
alert(msg);


// --------------

let multiplicando  = parseInt(prompt('Ingresa tu numero'));
let producto ;
let smg;

for(let i = 1;i<=10;i++){
    producto = i*multiplicando;
    smg += multiplicando + 'x' + i + '='+ producto+'\n'
    // smg +=multiplicando+ 'X' + i + '='+producto+'\n';
}
alert("Tabla del" + multiplicando + '\n'+smg);

// for(let i = 1;i<10;i++){
//     producto = multiplicando + 'X' + i+ '='+ (multiplicando*i)+'\n'
// }

// alert('Tabla del ' + multiplicando + '\n' + producto)



// -------------------

let usu= parseInt(prompt('Ingrese numero'));
let division;
for(let i=1;i<usu;i++){//numeros menores de usu

    if(i%3==2){ // los numeros menores de i, dividirlos entre3 y que sean igual a 2
        console.log(i)
    }
}

// ----------------

let letra = prompt('Ingrese una Letra');
let Nume = parseInt(prompt('Ingrese numero'));
let lms='';

for(i=1;i<=Nume;i++){
    lms += letra + '\n';
}
alert(lms)

// --------------
let right;
let left;



for(left=0;left<2;left++){
    for(right=0;right<5;right++){
        console.log(left+' : '+right)
    }
}


// --------------

let entero=parseInt(prompt('Ingrese un numero entero'));
let u;
let cadena;

for(let i=1;i<=entero;i++){
    cadena=''
    for(let u=1;u<=i;u++){
        cadena +='*'
    }
    console.log(cadena+'\n')
}

// --------------
let ente=parseInt(prompt('Ingrese numero entero'));
let Suma=0;

for(let i=0;i<=ente;i++){
    // for(let s=i;i<;i++){
    Suma += i;

}
console.log('Los numeros enteros de 0 a '+ente+' Suman '+Suma)



// ---------------------

let arit;
let conta;
let sumatoria=0;
for(arit=0;arit<4;arit++){
    conta=parseInt(prompt('Ingrese Numeros'))
    sumatoria+=conta/4;
}
alert('La Media aritmetica es: '+sumatoria)



// -------------------------


let numT = parseInt(prompt('Ingrese un numero entero'));
var i = 0;
let visible='';
while(i<=numT){
    visible += i + ',';
    i++
}
console.log(visible)


// problema mal resuelto, de la misma plataforma
// let numP,Sum = 0;

// while(Sum%2==0){
//     numP = parseInt(prompt('Ingrese un numero entero'));
//     while(numP != 0){
//         Sum += numP;
//         numP = parseInt(prompt('Ingrese un numero entero'));
//     }
//     alert("la suma es " + Sum)
// }
// alert('Fin de la prueba')}



// ----------------Funciones

let Num1,Num2;

function SumaFuncion (numero1,numero2){
    Num1=this.numero1;
    Num2=this.numero2;
    return numero1 + numero2;
}
SumaFuncion(3,5)


// -----------------


function esPar(numb){
    if(numb%2==0){
        return 'Es Par';
    }else if (numb%2!=0){
        return 'Es Impar'
    }
}

esPar(4)

// ------------------
// let RepLetra,RepNume;
let Llamadanumero='';

function RepetirLetra (repletra,repnume){
    // RepLetra=this.repletra;
    // repnume=this.repnume;
    for(let i= 1;i<=repnume;i++ ){
        Llamadanumero+=repletra
    }
    return Llamadanumero + '\n';
}

alert(RepetirLetra('a',5))/// o pudes crear como variable el parametro 'a',5(llamandolos con un prompt)

// ---------------------

let ReslFacto=1;

function Factorial(numF){
    for(let i=1;i<=numF;i++){
        ReslFacto = ReslFacto * i;
    }
    return ReslFacto;
}
Factorial(3)

// -------------

let NumerosReverse=parseInt(prompt('Ingrese numero para invertirlo'));

function RevertirCadenaNumeros(rever){
    const convertirReverse =  rever.toString().split("").reverse().join("");;
    return NumerosReverse(convertirReverse);
}

RevertirCadenaNumeros(NumerosReverse);


