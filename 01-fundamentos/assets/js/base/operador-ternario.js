/**
    * Días de semana abrimos a las 11,
    * pero los fines de semana abrimos a las 9
 */


// Entra a un sitio web, para consultar si está abierto hoy...
const dia = 1; // 0:domingo,..,2:martes,..,6:sabado

const horaActual = 11;

let horaApertura;
let mensaje;  // Esta abierto, Esta cerrado, hoy abrimos a las XX

//--> if (dia === 0 || dia === 6) { <--- 
// if ([0,6].includes(dia)) { 
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día de semana');
//     horaApertura = 11;
// }

//---- optimizado en una linea-------
horaApertura = ([0,6].includes(dia))? 9:11; 

// if (horaActual >= horaApertura) {
//     mensaje = `Esta abierto`;
// }else{
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

//-----optimizado en una linea------
mensaje = (horaActual >= horaApertura)? `Esta abierto`: `Esta cerrado, hoy abrimos a las ${horaApertura}`;



console.log({ horaApertura, mensaje });








