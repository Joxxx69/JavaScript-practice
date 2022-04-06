class Persona{

    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`)
    }
}

const nombre1= 'Karla',
      apellido1 = 'Aragon',
      pais = 'Ecuador';

const santiago ={
    nombre:'santiago',
    apellido:'Gualotuna',
    pais: 'Ecuador'
}

const persona1 = new Persona(nombre1, apellido1, pais);

const persona2 = Persona.porObjeto(santiago);

console.log(persona2)

console.log(persona1)

console.warn('---------------------------------');

persona1.getInfo();

persona2.getInfo();

