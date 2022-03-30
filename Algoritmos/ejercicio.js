// ejercicio1
/*function imprimeHasta(x) {
    // escribe tu código aquí
    if (x<0) {
        return false;
    }else{
        for(var i = 1; i <= x; i++) {
           console.log(i); 
        }
    }

}
imprimeHasta(1000000); // debe imprimir todos los enteros desde el 1 hasta el 1000000
 var y = imprimeHasta(-10); 
console.log(y); // debe imprimir false
*/
//ejercicio 2
/*function printSum(x) {
    var sum = 0;
    for (var i=0; i<256;i++) {
        console.log(i);
        sum+=i;
    }
    return sum
}
y = printSum(255) // debe imprimir todos los enteros desde el 0 hasta el 255, y la suma parcial en cada punto
console.log(y) // debe imprimir 32640
*/
// ejercicio 3
/*
function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum+=x[i];
    }
    return sum;
}
console.log( printSumArray([1,2,3]) ); // debe imprimir 6
*/
// ejercicio 4
function mayorElem(x) {
    var mayorHastaAhora = x[0];
    for (var i=0; i< x.length;i++) {
        if (mayorHastaAhora< x[i]) {
            mayorHastaAhora=x[i];
        }
    }
    return mayorHastaAhora;
}
console.log( mayorElem([8,3,11,2,-8]) ); // debe imprimir 11