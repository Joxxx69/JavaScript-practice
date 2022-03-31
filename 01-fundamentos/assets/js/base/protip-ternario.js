const elMayor =(a,b)=> (a>b)? a : b;

const tieneMembresia = (miembro)=> (miembro)? `2 dolares`: `10 dolares`;

console.log(elMayor(20,15));
console.log(tieneMembresia(false));

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Spiderman',
    (amigo) ? 'Thor': 'Loki',
    (()=>('Nick'))(),
    elMayor(32,23)
];

console.log(amigosArr);

// es un if mas simplificado
const nota = 65 // A+ A B+
const grado = (nota >= 95) ? 'A+' :
              (nota >= 90) ? 'A'  :
              (nota >= 85) ? 'B+' :
              (nota >= 80) ? 'B'  :
              (nota >= 75) ? 'C+' :
              (nota >= 70) ? 'C'  : 'F';

console.log({nota, grado})





// ----------- FUNCION ANONIMA AUTOEJECUTABLE ----------------------------
console.warn(`FUNCION ANONIMA AUTOEJECUTABLE`);

(function(nombre){
    console.log(`hola ${nombre}`)
})('karla');

((nombre)=>{
    console.log(`hola ${nombre}`);
})('Santiago');









