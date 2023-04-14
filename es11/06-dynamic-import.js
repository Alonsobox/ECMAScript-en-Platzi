const buttton = document.getElementById('btn');

buttton.addEventListener("click", async function(){
    const module= await import('./module.js');
    console.log(module);
    module.hello();
})