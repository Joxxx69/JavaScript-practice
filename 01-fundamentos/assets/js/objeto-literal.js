const personaje ={
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad:40,
    coords:{
        lat:34.034,
        lng:-118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu California'
    },
    ultima_pelicula: 'infinity war'
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coors', personaje.coords);
console.log('No. Trajes',personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length-1]);


const x = 'codeName';
console.log('Vivo', personaje[x]);

console.log('Ultima pelicula', personaje.ultima_pelicula);


// eliminar un campo del objeto

/*
    delete personaje.edad;

    console.log(personaje);
*/
// agregacion de campos

personaje.casado = true;


// entries
const entriesPares = Object.entries(personaje);

console.log(entriesPares)
/*
    resultados: 
    
    0: (2) ['nombre', 'Tony Stark']
    1: (2) ['codeName', 'Ironman']
    2: (2) ['vivo', false]
    3: (2) ['edad', 40]
    4: (2) ['coords', {…}]
    5: (2) ['trajes', Array(3)]
    6: (2) ['direccion', {…}]
    7: (2) ['ultima_pelicula', 'infinity war']

*/

// Object.freeze(objeto) ---> no permite agregar, eliminar y actualizar los campos del objeto

Object.freeze(personaje);

personaje.dinero = 10000000000000;
personaje.casado = false;

// con una excepcion de que si vale modificar los campos que esta en otro objeto dentro del objeto
// se puede eliminar, agregar y actulizar

delete personaje.direccion.zip;

personaje.direccion.casa = 3;

personaje.direccion.ubicacion = 'Costa Rica';

console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje); // --> retorna los nombres propios de las propiedades del objeto
const valores = Object.values(personaje); // --> retorna los valores de las propiedas del objeto

console.log({propiedades, valores});







