//----------------------------ejercicio 1

// function sigma(num) {
//     let suma=0;
//     while(num>=1){
//         suma+=num;
//         num--;
//     }
//     console.log(suma);
// }
// sigma(5);

//----------------------------ejercicio 2

// function factorial(num) {
//     let mult=1;
//     while (num>=1) {
//         mult*=num;
//         num--;
//     }
//     console.log(mult);
// }
// factorial(6);


//----------------------------ejercicio 3

//----------------------------ejercicio 4

// function penultimo(array) {
//     if (array.length > 2) {
//         return array[array.length-2];
//     }else{
//         return null;
//     }
// }
// let numero=penultimo([1,2,3]);
// console.log(numero);


//----------------------------ejercicio 5

// function ultimo(array, n) {
//     if (array.length > 2) {
//         return array[n];
//     }else{
//         return null;
//     }
// }
// let numero=ultimo([1,2,3,4,3,2,4,2],6);
// console.log(numero);

//----------------------------ejercicio 6

// function max_dos(array) {
//     let max=array[0];
//     let segundo=array[1];
//     if (array.length > 2) {
//         for (let i = 0; i < array.length; i++) {
//             if (max < array[i]) {
//                 segundo=max;
//                 max=array[i];
//             } else if(segundo <= array[i+1] ){
//                     segundo=array[i+1];
//             }
//         }
//         return segundo;
//     }else{
//         return null;
//     }

// }
// let segundo=max_dos([19,10,5,1,0,1,0]);
// console.log(segundo);


//----------------------------ejercicio 6

// function duplicado(array) {
//     let newarr=[];
//     for (let i = 0; i < array.length; i++) {
//         newarr.push(array[i]);
//         newarr.push(array[i]);
//     }
//     console.log(newarr);
// }
// duplicado([1,2,3,4]);
