
// ejercicio 1
/* 
let arr=[1,2,3,4,5,6,54,56,3,23,45];
let y=3;
let count=0;
for(let i=0; i<arr.length;i++){
    if(y<arr[i]){
        count++;
        console.log(arr[i]);
    }
}
console.log("el total de numeros mayor a "+y+" es de "+count);
*/

// ejercicio 2
/* 
let arr2=[45,2,3,54,5,6,54,56,3,23,45];
let max=arr2[0];
let min=arr2[0];
let suma=0;
let avg=0;
for(let i=0; i< arr2.length;i++){
    suma+=arr2[i];
    if(max<arr2[i]){
        max=arr2[i];
    }else if(min>arr2[i]){
        min=arr2[i];
    }
}
avg=suma/arr2.length;
console.log("el numero maximo es:"+ max);
console.log("el numero minimo es: "+min);
console.log("el promedio es: "+ (avg));
*/

//ejercicio 3
/* 
function reemplazarNegativos(arreglo) {
    for(let i=0; i<arr3.length;i++){
    if(arr3[i]<0){
       arr3[i]="dojo";
    }  
}
console.log(arr3);
}
let arr3=[1,2,3,-2,-3,4,-1];
reemplazarNegativos(arr3);
*/


// ejercicio 4

function removerRango(arreglo, num1, num2) {
    arreglo.splice(num1,num2);
    console.log(arreglo)
}

let arr4=[1,2,3,4,5,6,7,8];
let num1=0;
let num2=3;
removerRango(arr4,num1,num2);



