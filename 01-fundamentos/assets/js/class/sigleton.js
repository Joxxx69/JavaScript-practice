// un singleton es una instancia unica de mi clase de manera global


class Singleton{
    static #instancia;
    #nombre ='';

    constructor(nombre = ''){
        console.log(!!Singleton.#instancia)
        if (!!Singleton.#instancia){
            console.log('1')
            return Singleton.#instancia;
        }
        console.log('2')
        Singleton.#instancia = this;
        this.#nombre = nombre;
    }
    get getNombre(){
        return this.#nombre;
    }
}

const instancia1 = new Singleton('IronMan');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('black Panther');
 
console.log(`Nombre en la instacia1 es ${instancia1.getNombre}`);
console.log(`Nombre en la instacia2 es ${instancia2.getNombre}`);
console.log(`Nombre en la instacia3 es ${instancia3.getNombre}`);

// console.log(instancia1.getNombre)


/* 
const a = undefined;
console.log(a);     // undefined
console.log(!a);   // true
console.log(!!a); //  false
 */
