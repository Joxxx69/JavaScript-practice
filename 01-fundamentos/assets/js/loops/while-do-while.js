const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i=0;

console.warn('While');
while(i< carros.length){
    // if(i === 1){
    //     //break;
    //     i++;
    //     continue;
    // }
    console.log(carros[i])
    i++;  
};

// consideraciones falsas
/**
 * undefined
 * null
 * false
 */


console.warn('Do While');
let j=0;

do{
    console.log(carros[j])
    j++
}while(j < carros.length);

