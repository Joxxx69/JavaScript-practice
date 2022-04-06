const santiago = {
    nombre: 'Santiago',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}


console.log(santiago)
santiago.imprimir();
// Ok esto se debe de crear con la palabra new
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria',40);
const karla = new Persona('Karla',22);
maria.imprimir();
karla.imprimir();