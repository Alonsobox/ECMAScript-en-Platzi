const anotherFuncion = () =>{
    return new Promise((resolve, reject)=>{
        if(false){
            resolve('Hey!!');
        }
        else{
            reject('TMR!');
        }
    })
}

anotherFuncion()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(()=>console.log('Finnaly'))