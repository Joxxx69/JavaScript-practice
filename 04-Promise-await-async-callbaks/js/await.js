const { buscarHeroeAsync } = require("./async");
const { buscarHeroe } = require("./promesas");

const heroesIds = ['capi','iron','spider'];
// const heroesPromesas = heroesIds.map(buscarHeroe);
const heroesPromesas = heroesIds.map(id => buscarHeroe(id));

const obtenerHeroesArr = async () => { 
    // con el Promise.all ejecuto todas las promesas que se encuentran en el arreglo

    return await Promise.all(heroesIds.map(buscarHeroeAsync))

    /* const heroesArr = [];    
     --> no poner await en loops
    for (const id of heroesIds) {
        heroesArr.push(buscarHeroeAsync(id));
    }
    return await Promise.all(heroesArr); */
};


const obtenerHeroeAwait = async (id) => {
    try {
        return await buscarHeroeAsync(id);
    } catch (error) {
        console.log('Catch!!!');
        console.log(error);
        throw (error)
        //return{
        //    nombre:'Sin nombre',
        //    poder: 'Sin poder'
        //}
    }
} 


const heroesCiclo = async ()=>{
    console.time('heroesCiclo');

    /* metodo semi-valido ---> el c.time finaliza primero */
    // heroesPromesas.map(async (heroe)=> console.log(await heroe))

    /* For await */
    for await (const heroe of heroesPromesas) {
        console.log(heroe)
    }  

    /* metodo valido */
    // const heroes = await Promise.all(heroesPromesas);
    // console.log(heroes);
    // heroes.forEach(heroe => console.log(heroe)); 


    console.timeEnd('heroesCiclo');
}

const heroeIfAwait = async (id) => {
    console.log((await buscarHeroeAsync(id)).nombre)
    if((await buscarHeroeAsync(id)).nombre === 'Ironman'){
        console.log('Es el mejor heroe')  
    }else{
        console.log('no lo es ')
    }
};

module.exports = {
    obtenerHeroesArr,
    obtenerHeroeAwait,
    heroesCiclo,
    heroeIfAwait
}



