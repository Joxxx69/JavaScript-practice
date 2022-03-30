//--------------------------------------ejercicio 1

// function numero_string(array) {
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]>0){
//             array[i]="big";
//         }
//     }
//     console.log(array);
// }

// numero_string([1,2,-2,3,-4]);

//--------------------------------------ejercicio 2

// function max_min(array) {
//     let max=array[0];
//     let min=array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (max < array[i]) {
//             max=array[i];
//         } else if(min > array[i]){
//             min=array[i];
//         }
//     }
//     console.log(min);
//     return max;
// }
// let max=max_min([3,4,5,6,1]);
// console.log(max);

//--------------------------------------ejercicio 3

// function uno_otro(array) {
//     let retorno=0;
//     for (let i = 0; i < array.length; i++) {
//          if (array[i]%2!=0) {
//              retorno= array[i]
//              break;
//          }        
//     }
//     console.log(array[array.length-2]);
//     return retorno;
// }
// let primer_impar=uno_otro([3,4,5,6,1]);
// console.log(primer_impar);

//--------------------------------------ejercicio 4

// function nuevo(array) {
//     let newarray=[];
//     for (let i = 0; i < array.length; i++) {
//         newarray[i]=array[i]*2;        
//     }
//     console.log(array);
//     console.log(newarray);
// }
// nuevo([1,2,3,4]);

//--------------------------------------ejercicio 5

// function contarPositivos(array) {
//     let count=0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]>0) {
//             count++;
//         }
//         if (i==(array.length-1)) {
//             array[i]=count;
//         }
//     }
//     console.log(array);
// }

// contarPositivos([-1,1,2,1]);

//--------------------------------------ejercicio 6

// function par_impar(array) {
//     let count_par=0;
//     let count_impar=0;
//     let j=0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]%2==0) {
//             if (j!=count_par) {
//                 j=0;
//                 count_impar=0;
//             }
//             count_par++;
//             j++;
//             if(count_par==3 && j==count_par ){
//                 console.log("¡Es para bien!");
//                 count_par=0;
//                 j=0;
//             }

//         }
//         if (array[i]%2!=0 ) {
//             if (j!=count_impar) {
//                 j=0;
//                 count_par=0;
//             }
//             count_impar++;
//             j++;
//             if(count_impar==3 && count_impar==j){
//                 console.log("¡que imparcial!");
//                 count_impar=0;
//                 j=0;
//             }

//         }
//     }
// }

// par_impar([1,2,2,1,2,1,2,1,2,1,1,1]);

//--------------------------------------ejercicio 7

// function incremento(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (i%2!=0) {
//             array[i]+=1;
//         }
//     }
//     console.log(array);
// }
// incremento([1,2,3,4,5,6,7,8,9,9]);

//--------------------------------------ejercicio 8



//--------------------------------------ejercicio 9

// function siete(array) {
//     let newarr=[];
//     for (let i = 0; i < array.length; i++) {
//         newarr.push(array[i]+7);
//     }
//     console.log(array);
//     console.log(newarr);
// }
// siete([1,2,4,3]);

//--------------------------------------ejercicio 10

// function inverso(array) {
//     let aux1=0;
//     let recursiones=(array.length-1);
//     console.log(array);
//     while (recursiones!=0) {
//         for (let i = 0; i < recursiones; i++) {
//             aux1=array[i];
//             array[i]=array[(i+1)];
//             array[(i+1)]=aux1;
            
//         }
//         i=0;
//         recursiones-=1;
//     }
//     console.log(array);
// }

// inverso([1,2,3,4,5]);

//--------------------------------------ejercicio 11

// function perspectiva(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i]>0) {
//             array[i]=(array[i]-(array[i]*2));
//         }  
//     }
//     console.log(array);
// }

// perspectiva([1,2,3,4,-2,-3]);

//--------------------------------------ejercicio 12

// function hambriento(array) {
//     for (let i = 0; i < array.length; i++) {
//         if(array[i]=="comida"){
//             console.log("yummy");
//         }
//         if (array[i]!="comida" && i==(array.length-1) ) {
//             console.log("tengo hambre");
//         }  
//     }    
// }
// hambriento(["comida","hola","comida"]);
// hambriento(["h","f","g"]);

//--------------------------------------ejercicio 13




//--------------------------------------ejercicio 14

// function escala(array, num) {
//     for (let i = 0; i < array.length; i++) {
//         array[i]*=num;
//     }
//     console.log(array);
// }
// escala([1,2,3,6,2], 4);