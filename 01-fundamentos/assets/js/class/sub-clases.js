// todas las clases tienen por defecto el 'use strict'
class Persona{
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instanciaas'
    }
    static mensaje(){
        console.log('hola a todos, soy un metodo estatico');
    }

    nombre ='';
    codigo ='';
    frase ='';
    comida= '';

    constructor(nombre = 'sin nombre', codigo ='sin codigo',frase='sin frase'){

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo ++;
    }
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();

    }
    get getComidaFavorita(){
        return `la comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy(){
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }
    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`)
    }
}

class Heroe extends Persona{
    clan='sin clan';
    constructor(nombre,codigo,frase){
        super(nombre,codigo,frase);
        this.clan = 'los avengers'
    }
    quienSoy(){
        console.log(`estoy en la sub-clase ${this.nombre} `);
        super.quienSoy();
    }
    
}

// const spirderman = new Persona('Peter','Spider','soy tu amigo el hombre arana');
const spiderman = new Heroe('Peter','Spider','soy tu amigo el hombre arana');
console.log(spiderman);
spiderman.quienSoy();

