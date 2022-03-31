function crearPersona1(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}

// ----> lo que esta dentro de los parentesis es un objeto que retornara la funcion
const crearPersona2 = (nombre, apellido)=>({nombre,apellido});


const persona1  = crearPersona1('Santiago', 'Gualotuna');
console.log(persona1);

const persona2  = crearPersona2('Santiago', 'Gualotuna');
console.log(persona2);

//desestructuracion de un objeto
const {nombre:nuevoNombre} = crearPersona2('Jose', 'Gualotuna')
console.log(nuevoNombre)



//------------------------------- arguments ------------------------------

function imprimeArgumentos1() {
    console.log(arguments);
}

imprimeArgumentos1(10,true,false,'hola');
// Resultado:
// Arguments(4) [10, true, false, 'hola', callee: ƒ, Symbol(Symbol.iterator): ƒ]



// la funcion flecha no crea un objeto de argumentos como la funcion tradicional
// pero si se se puede pasar varios argumentos con el operador rest (...), 
// generando un arreglo con los argumentos
const imprimeArgumentos2 =(...args)=>{
    console.log(args);
}

imprimeArgumentos2(12,'santiago','universidad',true);

const imprimeArgumentos3 =(edad,...args)=>{
    console.log({edad,args});
}

imprimeArgumentos3(12,'santiago','universidad',true);

const imprimeArgumentos4 =(...args)=>{
    return args;
}

// desestructuracion en un arreglo
const [edad,nombre,universidad,programador]=imprimeArgumentos4(12,'santiago','epn',true);
console.log({edad,nombre,universidad,programador});

// DESESTRUCTURACION

const tony ={
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad:40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu California'
    },
};


// en el caso de la edad, si el objeto no tiene edad, al asignar un valor en la desesctructuracion
// actua como un condicional. si el objeto tiene la edad se imprime la edad correspondiente,
// si no el objeto no tiene la edad, se le asignara un valor de 15
const imprimePersonaje1 = ({nombre,codeName,vivo,edad=15,direccion:{zip,ubicacion}, direccion}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({direccion})
    console.log({zip});
    console.log({ubicacion});
    
}

imprimePersonaje1(tony);

const imprimePersonaje2 = ({...args}) => {
    console.log(args);   
}

imprimePersonaje2(tony);

