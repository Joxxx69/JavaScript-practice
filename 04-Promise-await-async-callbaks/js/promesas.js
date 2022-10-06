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

// Se debe retornar una promesa
const buscarHeroe = (id) => { 

    const heroe = heroes[id];
    // los argumentos de la promesa son /* resolve(res) y reject(rej) */ son opciones
    /**
     * resolve(res) = cuando se resulve la promesa
     * reject(rej)  = cuando se produce un error
     */
    return new Promise((res,rej)=>{
        if(heroe){
            setTimeout(() => {
                res(heroe);       
            }, 1000);
        }else{
            rej(`No existe un heroe con el id: ${id} `);
        }
    });

    //forma 1 de realizar una promesa
    /* const promesa = new Promise();
     return promesa; */

}


const promesaLenta = new Promise((res,rej)=>{
    setTimeout(() => {
        res('Promesa Lenta')
    }, 2000);

});
const promesaMedia = new Promise((res,rej)=>{
    setTimeout(() => {
        res('Promesa Media')
    }, 1500);

});
const promesaRapida = new Promise((res,rej)=>{
    setTimeout(() => {
        res('Promesa Rapida')
    }, 1000);

});

module.exports = {
    buscarHeroe,
    promesaLenta,
    promesaMedia,
    promesaRapida
}