// Con el OR(||) lo que hacemos es darles valores por defecto(Forma JS)
function newUser(name, age, country){
    var name = name || 'oscar';
    var age = age || 34;
    var country = country ||'MX';
    console.log(name, age, country);
}

newUser();
newUser('Alonso', 22, 'PR')

//Forma de realizar lo mismo pero con ECMAScript

//?en el parametro declaramos, esto seria como usar el OR(||) y dar valores por defecto
function newAdmin(name='Oscar', age = 32 , country = 'CL'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PR')