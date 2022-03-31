let a = 5;

if (a >= 10) {
    console.log('es mayor');
} else {
    console.log('no es mayor');
}


const hoy = new Date(); //{}

let dia =hoy.getDay(); // Domingo:0, Lunes:1, Martes: 2,.....

console.log({dia});

// = asigna el valor  dia = 1
// == compara y asigna el valor comparado 1 == '1' --> true, 1 == '2' ---> false
// === compara de forma estricta 1 === '1' --> false

if(dia === 0 ){
    console.log('hoy es domingo')
}else{
    console.log('no es domingo')
}


// Sin usar If Else, o Switch, unicamente objetos o arreglos

dia = 3;

const semana1 = {
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado'
};

console.log(semana1[dia] || 'dia no es valido');

const semana2 = {
    0:()=>'domingo',
    1:()=>'lunes',
    2:()=>'martes',
    3:()=>'miercoles',
    4:()=>'jueves',
    5:()=>'viernes',
    6:()=>'sabado'
};

console.log(semana2[dia]() || 'dia no es valido');

const semana3 =[
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado'
];
console.log(semana3[dia] || 'dia no es valido')