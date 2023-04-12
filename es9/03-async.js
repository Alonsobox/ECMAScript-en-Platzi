async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGengierator();
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
console.log('Hello')

async function arrayOfName(array){
    for await(let value of array){
        console.log(value);
    }
}

const name= arrayOfName(['David','Oscar','Pedro'])
console.log ('Final')