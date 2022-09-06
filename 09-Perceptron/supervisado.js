const { elementAcceptingRef } = require("@mui/utils");

const redNeuronal = (entrada,target=[],Winit,n,...arg) => {
    arg = {patron,epoca};
    const verificarTarget = target.every(obj=>obj==true);
    if (verificarTarget) {
        console.log("Pesos Sinapticos encontrados");
        return;
    }
    const  {Xs,salida,targetActual}= impresionValores(epoca, patron, entrada,Winit);
    patron = (patron == 3) ? patron = 0 : patron+=1;
    if (patron == 3) { epoca+=1; };
    if (salida == targetActual) {
        target[patron] = true;
        console.log("W: ["+Winit[0].toFixed(2)+","+Winit[1].toFixed(2)+"]");
        redNeuronal(entrada,target,Winit,n,patron,epoca);
    } else {
        const Ws = [
            Winit[0] + n * (targetActual - salida) * Xs[0],
            Winit[1] + n * (targetActual - salida) * Xs[1]
        ];
        console.log("Ws: ["+Ws[0].toFixed(2)+","+Ws[1].toFixed(2)+"]");
        redNeuronal(entrada,target, Ws,n, patron,epoca);
    }   
}
const Net = (Wnet, Xs) => (Wnet[0] * Xs[0] + Wnet[1] * Xs[1]);
const funcionActivacion = (net) => (net >= 2) ? 1 : 0;

const impresionValores = (epoca,patron,entrada,Winit) => {
    console.log("\nEpoca: ", epoca);
    let Xs = [entrada[patron][0], entrada[patron][1]];
    console.log("Patron: ", patron + 1);
    console.log("X1 X2: ["+Xs.toString()+"]");
    let net = Math.trunc(Net(Winit,Xs));
    console.log("Net: ", net);
    let salida = funcionActivacion(net);
    console.log("salida: ", salida);
    let targetActual = entrada[patron][2];
    console.log("Target: ", targetActual);
    return {Xs,salida,targetActual};
}
(function () {
    //const entrada1 = [[0, 0, 0], [0, 1, 0], [1, 0, 0], [1, 1, 1]];// AND
    //const entrada2 = [[0, 0, 0], [0, 1, 1], [1, 0, 1], [1, 1, 1]];// OR
    //const n = 0.5;// Taza de aprendizaje
    //let w = [0.5, 0.5];// Peso sinaptico inicial
    //console.log("-----------------AND-----------------");
    //let target1 = [false, false, false, false];
    //let target2 = [...target1];
    //console.table(entrada1);
    //redNeuronal(entrada1,target1,w,n,patron=0,epoca=1);
    //console.log("-----------------OR-----------------");
    //console.table(entrada2);
    //redNeuronal(entrada2,target2,w,n,patron=0,epoca=1);
    let count = 0;
    let x=-1, y=-1, z=-1;
    for (let caras = 0; caras < 10; caras++){
        for (let filas = 0; filas <5;filas++){
            for (let columnas = 0; columnas < 5; columnas++){
                console.log(count +": "+ x + ", " + y + ", " + z);
                count++;
                z += 0.008;
            }
            y+=0.04;
        }
        x+=0.22;
    }
    console.log(count);
})();