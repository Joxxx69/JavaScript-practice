let juegos =['zelda', 'Mario', 'Metroid','jack'];

console.log(`largo: ${juegos.length}`);

let primero = juegos[0];
let ultimo = juegos[juegos.length-1];

console.log({primero, ultimo});

// forEach

juegos.forEach((juego, indice, arr)=> {
    console.log({juego,indice,arr});
});

// push ---> inserta elementos al final del arreglo
let nuevaLongitud= juegos.push('F-Zero');

console.log({nuevaLongitud,juegos});

// unshift --> inserta elementos al inicio del arreglo
 
nuevaLongitud = juegos.unshift('fire emblem');

console.log({nuevaLongitud,juegos});

// pop --> elimina el ultimo elemento del arreglo

let juegoBorrado = juegos.pop();

console.log({juegoBorrado,juegos});


// splice ---> elimina un elemento del arreglo especificando la posicion inicial (indice)
// y la numero de elemetos a eliminar, teniendo en cuanta que este numero(indice) se excluye

console.log(juegos)

//arreglo en estos momentos --> ['fire emblem', 'zelda', 'Mario', 'Metroid', 'jack']
let pos =1;

let juegosBorrados = juegos.splice(pos,2);

// arreglo despues de aplicar splice ----> ['fire emblem', 'Metroid', 'jack']
console.log({juegos, juegosBorrados});

// indexOf --> retorna el indice del elemento en el arreglo
// si no lo encuentra retorna -1 

let metroidIndex = juegos.indexOf('metroid');

console.log({metroidIndex})