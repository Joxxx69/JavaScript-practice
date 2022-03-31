// los primitivos son pasados por valor

let a =10;
let b = 5;
a = 30;
console.log({a,b});


// en javascrit todos los objetos son pasados por referencia

// se esta apuntando al mismo espacio en memoria ---> por eso cuando se cambia a ana
// tambien se cambia juan.
let juan ={nombre:'juan'};
let ana = juan;

ana.nombre = 'ana'
console.log({juan,ana});

// apunta al mismo espacio en memoria
const cambiaNombre1 =(persona)=>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre1(peter);

console.log({peter, tony})

// copiar un objeto
// en argumentos (...) ---> rest --> une todos los argumentos en una sola variable
// y transformalo como un arreglo
/*
    const name=(...args)=>{
        block
    };
*/
// en objetos o fuera de los argumentos (...) ---> spread
// con este operador se se rompe la reacion al copiar un objeto o arreglo
// por lo tanto ya no se apunta al mismo espacio en memoria
// SPREAD --> genera un nuevo objeto o arreglo
//  COPIAR UN OBJETO    
 const patricio ={ nombre: 'Patricio'};
 const Carlos = {...patricio}
 Carlos.nombre = 'Carlos'

 console.log({patricio, Carlos});


 const cambiaNombre2 =({...persona})=>{
    persona.nombre = 'Jose';
    return persona;
}

let Karla = {nombre: 'Karla'};
let Jose = cambiaNombre2(Karla);

console.log({Karla, Jose})



// ------------------ARREGLOS------------------------------

const frutas =['manzana','pera','pina'];

// lo que realiza es generarme otro arreglo distinto con spread

// con console.time() y console.timeEnd() ayuda a verificar los tiempos de ejecucion
console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas1 = [...frutas];
console.timeEnd('spread');

otrasFrutas1.push('mango');

console.table({frutas,otrasFrutas1})













