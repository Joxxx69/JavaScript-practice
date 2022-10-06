const heroes ={
    capi:{
        nombre:'Capitan America',
        poder:'Aguantar inyecciones sin morir'
    },
    iron:{
        nombre:'Ironman',
        poder:'Absurda cantidad de dinero'
    },
    spider:{
        nombre:'Spiderman',
        poder:'La mejor reaccion a las aranias'
    }
};
const buscarHeroeAsync = async (id) => { 

    const heroe = heroes[id];

    if(heroe){
        return heroe;
    }else{
        //throw Error(`No existe un heroe con el id: ${id} `); //- Identificar errores inesperados (errores generales)
        throw `No existe un heroe con el id: ${id} `; //- Identificar errores esperados (Errores conocidos)
    }

}

module.exports = {
    buscarHeroeAsync
}