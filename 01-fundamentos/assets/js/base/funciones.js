// funcion retorno un undefided, si no tiene un return explicito

// funcion tradicional 
function saludar1(nombre) {
    // console.log(`Hola ${nombre}`);
    // console.log(arguments);
    return 10000;

    //esto nunca se va a ejecutar
    console.log('hola')
}

// funcion anonima --> evita el problema con VAR 
const saludar2 = function(nombre){
    console.log(`Hola ${nombre}`);
    // console.log(arguments);

}

// funcion flecha
const saludar3 = (nombre) => {
    console.log(`Hola ${nombre} flecha`);
}


// llamado a las funciones 
const retornoSaludar1 = saludar1('Santiago', 40, true, 'Costa Rica');
console.log({retornoSaludar1});

saludar2('Santiago', 40, true, 'Costa Rica');
saludar3('Santiago');



//--------------------------------------------------------------------------------------------------

function sumar1(a,b) {
    return a+b;
}

const sumar2 =(a,b)=> a+b;
const getAleatorio = () => Math.floor(Math.random()*(1+2))+1;

console.log(sumar1(2,3));
console.log(sumar2(3,4))
console.log(getAleatorio());




 
















