const Data = require("./Data");
let idxCentroids = []; // obtiene los indices de los primeros centros
let centroids = [];  // arreglo de arreglos centros obtenidos apartir de los indices
let newCentroid=[] // arreglo de arreglos para el nuevo centro 
let distCluster = []; // arreglo de arreglos que contendra las distancias Euclidianas



const centroidsInit = () => { // obtengo los indices de los centros - clusters
    let k = 3, n;  
    let flat = false;
    for (let i = 0; i < k;i++){
        do {
            n = Math.floor(Math.random() * 556);
            for (let i = 0; i < k;i++){
                if (n==idxCentroids[i]) {
                    flat = true;
                }
            }
        } while (flat);
        idxCentroids.push(n);
    }
    centroids = idxCentroids.map(obj=> [...Data[obj]]);
}


const distancia = () => {
    let arrayDist = [];
    let matrizDist = [];
    let x = 0;
    let i = 0;
    do {
        for (let j = 0; j < Data[0].length; j++) {
            if (Data[i][j] > centroids[x][j]) {
                if (centroids[x][j] == 0) {
                    arrayDist[j] = Data[i][j];;
                } else {
                    arrayDist[j] = Data[i][j] - centroids[x][j];
                }   
            }
            if (Data[i][j] < centroids[x][j]) {
                if (Data[i][j] == 0) {
                    arrayDist[j] = centroids[x][j];
                } else {
                    arrayDist[j] = centroids[x][j] - Data[i][j];
                }
            }
            if (Data[i][j] == centroids[x][j]) {
                arrayDist[j] = 0;
            }
        }
        matrizDist[x]=[...arrayDist]
        x++;
        if (x == 3) {
            distEuclidiana(matrizDist);
            i++;
            x = 0;
        }

    } while (i !=556);
    
    
}

const distEuclidiana = (matrizDist) => {
    let arrayCluster = [];
    let valorCluster = 0;
    for (let i = 0; i < matrizDist.length;i++){
        for (let j = 0; j < matrizDist[0].length;j++){
            valorCluster += Math.pow(matrizDist[i][j],2);
        }
        valorCluster = Math.sqrt(valorCluster);
        arrayCluster[i] = valorCluster;
        if (i == 2) {
            distCluster.push([...arrayCluster]);
        }
        valorCluster = 0;
    }

}

const minimoCluster = () => {
    let minimosIdx = distCluster.map(obj => obj.indexOf( Math.min(...obj)));
    //minimosIdx.map(obj=>console.log(obj));
    agrupacionCluster(minimosIdx);
}

const agrupacionCluster = (minimosIdx = []) => {
    let idxAsigClus1 = [];
    let idxAsigClus2 = [];
    let idxAsigClus3 = [];
    for (let idx in minimosIdx){
        if (minimosIdx[idx]==0) {
            idxAsigClus1.push(idx);
        }
        if (minimosIdx[idx]==1) {
            idxAsigClus2.push(idx);
        }
        if (minimosIdx[idx]==2) {
            idxAsigClus3.push(idx);
        }
    }
    let AsigCluster1 = idxAsigClus1.map(obj => [...Data[obj]]);
    let AsigCluster2 = idxAsigClus2.map(obj => [...Data[obj]]);
    let AsigCluster3 = idxAsigClus3.map(obj => [...Data[obj]]);
    
    sumaAsignacion(AsigCluster1, AsigCluster2, AsigCluster3);
}

const sumaAsignacion = (AsigCluster1=[] , AsigCluster2=[], AsigCluster3=[]) => {
    let arraySuma1 = []
    let valor1 = 0;
    if (AsigCluster1.length>0) {
        for (let j = 0; j < AsigCluster1[0].length; j++){
            for (let i = 0; i < AsigCluster1.length; i++){
                valor1 += AsigCluster1[i][j];
                if (i==(AsigCluster1.length-1)) {
                    arraySuma1[j] = valor1/AsigCluster1.length;
                    arraySuma1[j] = Number(arraySuma1[j].toFixed(2));
                }
            }
            valor1 = 0;
        }
    }
    let arraySuma2 = [];
    let valor2 = 0;
    if (AsigCluster2.length>0) {
        for (let j = 0; j < AsigCluster2[0].length;j++){
            for (let i = 0; i < AsigCluster2.length;i++){
                valor2 += AsigCluster2[i][j];
                if (i==(AsigCluster2.length-1)) {
                    arraySuma2[j] = valor2/AsigCluster2.length;
                    arraySuma2[j] = Number(arraySuma2[j].toFixed(2));
                }
            }
            valor2 = 0;
        }
        
    }
    let arraySuma3 = [];
    let valor3 = 0;
    if (AsigCluster3.length>0) {
        for (let j = 0; j < AsigCluster3[0].length;j++){
            for (let i = 0; i < AsigCluster3.length;i++){
                valor3 += AsigCluster3[i][j];
                if (i==(AsigCluster3.length-1)) {
                    arraySuma3[j] = valor3 / AsigCluster3.length;
                    arraySuma3[j] = Number(arraySuma3[j].toFixed(2));
                }
            }
            valor3 = 0;
        }
        
    }
    newCentro(arraySuma1,arraySuma2,arraySuma3);
}
const newCentro = (arraySuma1 = [], arraySuma2 = [], arraySuma3 = []) => {
    newCentroid = [
        [...arraySuma1],
        [...arraySuma2],
        [...arraySuma3]
    ]
    
    console.log("new center");
    newCentroid.map(obj => console.log(obj));
    console.log("old center");
    centroids.map(obj => console.log(obj));
    console.log(igualCentroid());

}

const igualCentroid = () => {
    let valoresIguales = centroids.length * centroids[0].length;
    let count = 0;
    for (let i = 0; i < centroids.length;i++){
        for (let j = 0; j < centroids[0].length;j++){
            if (newCentroid[i][j]==centroids[i][j]) {
                count++; 
            }
        }
    }
    return (count == valoresIguales);
}




const main = () => {
    distancia();
    minimoCluster();
    distCluster = [];
    
    if (igualCentroid()) {
            console.log("termino");
            return;
    } else {
        //let arregloAux = [...centroids];
        console.log("No termina");
        centroids = [...newCentroid];
        main();
    }
}
        
centroidsInit();
//centroids = [
//    [0.59, 0.34, 0, 1.99, 0],
//    [0.59, 0, 2, 0, 0],
//    [0.53,0,0,0,4]
//]

main();



