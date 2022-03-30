//ejercicio 1
/*
function resertNegativos(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]<0){
            arr[i]=0;
        }  
    }
    console.log(arr);
}

resertNegativos([1,2,-1,-3]);
*/

//ejercicio 2
/*
function moverAdelante(array) {
    for(let i=0; i<array.length;i++){
        array[i]=array[i+1];
    }
    array[array.length-1]=0;
    console.log(array)
}

moverAdelante([1,2,3,4,56]);
*/

//ejercicio 3
/*
function returnReverso(array) {
    let arrnew=[];
    let j=0;
    for(let i=array.length-1; i>= 0;i--){
        arrnew[j]=array[i];
        j++;
    }
    console.log("el arreglo inicial: "+ array);
    console.log("el arreglo invertido: "+ arrnew);
}
returnReverso([2,3,4,5,6,3,5]);
*/

//ejercicio 4

function duplicado(array) {
    let newarr=[];
    for (let i = 0; i < array.length; i++) {
        newarr.push(array[i]);
        newarr.push(array[i]);
    }
    console.log(newarr);
}
duplicado([1,2,3,4]);