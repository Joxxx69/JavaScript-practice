const { buscarHeroeAsync } = require('./js/async');
const { buscarHeroe } = require('./js/promesas');

//! Promise
buscarHeroe('spider')
.then(heroe=>console.log(heroe))
.catch(err => console.warn(err));


//! Async
buscarHeroeAsync('capi')
.then(heroe=>console.log(heroe))
.catch(err => console.warn(err));

  