// alert('Hola desde');

// este es el primer hola mundo
//console.log('hola mundo');

//polyfill -->
//  es un codigo que provee el funcionamiento de una nueva caracteristica de javascript(ES6), en versiones viejas como ES5

// VARIABLES VAR, LET, CONST

var variable = 10;  // ---> ya no se debe ocupar 
let a = 1,
    b = 2,
    c = 3;
// let m=n+v, n=2, v=3; --> esto produce error   
let m=4, n=2, v=3;
       
  
const saludo = 'hola mundo'; // --> estas variables son mas ligeras que var, let

console.log('%c Mis variables', 'color:red; font-weight: bold');
console.log({c}); //----> resultado: {c: 4}
console.log(c);  //----> resultado: 4
console.error('%c Mis variables', 'color:red; font-weight: bold');


console.table({a,b,c}) // --> genera una tabla con las variables ingresadas


// las vairables LET y CONST --> no sobreescriben las variables globales del objeto windows
/*
    console.log(outerHeight) // --> se produce un error
    
    let outerWith = 100000;
    const outerHeight = 6000;


*/


// la variable VAR --> sobre escribe las variables gloables del objeto windows
/*
    var miNombre = 'Santiago';
    var outerHeight = 5000;
*/
// la variable VAR se tiene hoisting 
// hoisting --> sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código
// pero no se mueven de su sitio

/*
    console.log(elevacion); // ---> devuelve undefine

    var elevacion = 3;

*/