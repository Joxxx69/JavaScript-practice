const { promesaLenta, promesaMedia, promesaRapida } = require('./js/promesas');
const { buscarHeroe } = require('./js/promesas');

const heroeId1 ='capi';
const heroeId2 ='spider';
const heroeId3 ='iron';

//! Promesas
// buscarHeroe(heroeId1)
// .then(heroe => console.log(`Enviado a ${heroe.nombre} a la mision`))




//! Uso del Promise.all --> promesas en paralelo
// cada promesa tiene un indice correspondiente --> si no se desestructura --> 
//--> muestra el resultado de la primera promesa en el arreglo
Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2),buscarHeroe(heroeId3)])
.then(([heroe1,heroe2,heroe3]) =>{
    console.log(`Enviando a ${heroe1.nombre} , ${heroe2.nombre} y ${heroe3.nombre}a la mision`)
})
.catch(err=> console.warn(err))
.finally(()=> console.log('se termino el promise.all'))

console.log('Fin del Programa');

//! uso del Promise.race
/* promesaLenta.then((mensaje)=> console.log(mensaje))
promesaMedia.then((mensaje)=> console.log(mensaje))
promesaRapida.then((mensaje)=> console.log(mensaje)) */
//promesaLenta.then( console.log)
//promesaMedia.then(console.log)
//promesaRapida.then( console.log) 

// Promise.race --> permite ejecutar varias promesas en conjunto -->
//--> obtiene el resultado de la promesa que se resuelve mas rapida
Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then(mensaje => console.log('msg: ', mensaje))
    .catch(err => console.log('err: ', err));










