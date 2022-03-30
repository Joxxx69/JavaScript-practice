// ------------------------------------ejercicio 1

// function numeros() {
//     let array=[];
//     for(let i=1; i<256;i++){
//         array.push(i);
//     }
//     return array;
// }

// let arreglo=numeros();
// console.log(arreglo);
// resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, ...]

// ---------------------------------ejercicio 2 

// function pares() {
//     let suma=0;
//     for(let i=0; i<=1000;i++){
//         if (i%2==0) {
//             suma+=i;
//         }
//     }
//     return suma;
// }
// let suma_pares= pares();
// console.log(suma_pares);
// resultado: 250500

//-------------------------- ejercicio 3

// function impares() {
//     let suma=0;
//     for(let i=0; i<=5000;i++){
//         if (i%2!=0) {
//             suma+=i;
//         }
//     }
//     return suma;
// }
// let suma_impares= impares();
// console.log(suma_impares);
// respuesta: 6250000

//-------------------------- ejercicio 4

// function suma(array) {
//     let suma=0;
//     for (let i = 0; i < array.length; i++) {
//         suma+=array[i];
//     }
//     console.log(suma);
// }
// var arr=[1,2,3,-4];
// suma(arr);
// Respuesta: 2

//-------------------------------------------- ejercicio 5

// function max(array) {
//     let max=array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (max<array[i]) {
//             max=array[i];
//         }        
//     }
//     console.log(max);
// }
// max([2,3,5,1]);
// resultado: 5

//-------------------------------------------- ejercicio 6

// function avg(array) {
//     let promedio=0;
//     let suma=0;
//     for (let i = 0; i < array.length; i++) {
//         suma+=array[i];
//     }
//     promedio=suma/array.length;
//     console.log(promedio);
// }
// avg([2,3,5,1]);
// resultado: 2.75


//-------------------------------------------- ejercicio 7

// function impares() {
//     let array=[];
//     for(let i=1; i<=50;i++){
//         if (i%2!=0) {
//             array.push(i);
//         }
//     }
//     console.log(array);
// }
// impares();
// resultado: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49] 

//-------------------------------------------- ejercicio 8

// function mayores_y(array, y) {
//     let count=0;
//     for (let i = 0; i < array.length; i++) {
//         if (y < array[i]) {
//             count++;
//         }        
//     }
//     console.log(`numeros mayores que ${y} son ${count}`);
// }

// mayores_y([2,3,4,5,32,12], 4);
// numeros mayores que 4 son 3

//-------------------------------------------- ejercicio 9

// function cuadrados(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i]=array[i]*array[i];        
//     }
//     console.log(array);
// }
// cuadrados([1,2,3,4]);
// resultado: Â [1, 4, 9, 16]

//-------------------------------------------- ejercicio 10

// function negativos(array) {
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]<0){
//             array[i]=0;
//         }
//     }
//     console.log(array);
// }

// negativos([1,2,-2,3,-4]);
// resultados: [1, 2, 0, 3, 0]


//-------------------------------------------- ejercicio 11

// function max_min_avg(array) {
//     let suma=0;
//     let promedio=0;
//     let max=array[0];
//     let min=array[0];
//     let newarr=[];
//     for (let i = 0; i < array.length; i++) {
//         suma+=array[i];
//         if (max < array[i]) {
//             max=array[i];
//         } else if(min > array[i]){
//             min=array[i];
//         }
//     }
//     newarr.push(max);
//     newarr.push(min);
//     newarr.push(suma/array.length);
//     console.log(newarr);
// }
// max_min_avg([3,4,5,6,1]);
//resultado: [6, 1, 3.8]

//-------------------------------------------- ejercicio 12

// function intercambio(array) {
//     let aux= array[0];
//     array[0]=array[array.length-1];
//     array[array.length-1]=aux;
//     console.log(array);
// }
// intercambio([2,1,4,54,334]);
//resultado: [334, 1, 4, 54, 2]
// intercambio([1,5,10,-2]);
// resultado: [-2, 5, 10, 1]

//-------------------------------------------- ejercicio 13

// function numero_string(array) {
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]<0){
//             array[i]="dojo";
//         }
//     }
//     console.log(array);
// }

// numero_string([1,2,-2,3,-4]);
//  resultado: [1, 2, 'dojo', 3, 'dojo']