const countries = {
    Mx: 'Mexico',
    CO: 'Colombia',
    CL: 'Chile',
    PE: 'Peru'
}
console.log(Object.values(countries));//Object.values (estamos llamando solo valores en un array)

// ------------------------

const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.keys(usuario)//el .keys(llama las llaves en un array)
// [ 'name', 'email', 'age' ]