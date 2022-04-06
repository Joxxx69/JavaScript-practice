
class Singleton{
    static #instancia;
    #nombre ='';
    constructor(nombre = ''){
        console.log(Singleton.#instancia);
        this.#nombre = nombre;

    }
    get getNombre(){
        return this.#nombre;
    }
}

const instancia1 = new Singleton('IronMan');
const instancia2 = new Singleton('Spiderman');

console.log(instancia1.getNombre)