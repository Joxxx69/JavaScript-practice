//- Nuestro objetivo es agrupar los datos para que podamos ver los productos que son
//- comprados juntos por los clientes


/*
! Por ejemplo, si una persona va a la tienda a comprar algun comestible, es muy 
! probable que tambien compre "leche", por lo tanto podemos colocar la "leche" 
! cerca de los comestibles de la tienda; de la misma manera es muy poco probable 
! que la misma persona compre las verduras frescas al mismo tiempo.
*/


/*
* Si podemos predecir este comportamiento del cliente, podemos organizar la tienda,
* en consecuencia aumentara las ventas de articulos.
*/

const data = [2, 4, -10, 12, 3, 20, 30, 11];

let clusters = [2, 4, 30];

const distancia = () => {
    let arreglo1 = [];
    let arreglo2 = [];
    let arreglo3 = [];
    for (let i in clusters){
        for (let j in data){
            if (i == 0) {
                arregloDistancia(i,j,arreglo1);
            } else if (i==1) {
                arregloDistancia(i,j,arreglo2);
            } else if (i==2) {
                arregloDistancia(i,j,arreglo3);
            }
        }
    }

    let matriz = [
        [...arreglo1],
        [...arreglo2],
        [...arreglo3]
    ];
    gruposClusters(matriz);


}

const gruposClusters = (matriz = []) => {
    let idx = 0;
    let idxAux = 0;
    let count = -1;
    let arreglo = [];
    let min = 0;
    let arra = [];
    for (let j = 0; j < matriz[0].length; j++) {
        min = matriz[idx][j];
        for (let i = 0; i < matriz.length; i++) {
            if (min > matriz[i][j]) {
                console.log(j);
                min = matriz[i][j];
                idxAux = i;
            }
        }
        arra.push(count);
        arreglo.push(min);
        idx = (idx==2)?0:idx=idx+1;
        count = -1;
    }
    //console.log(matriz.toString());
    console.log(arreglo.toString());
    console.log(arra.toString());

}


const arregloDistancia = (i,j,arreglo=[]) => {
    if (data[j] < 0) {
        arreglo.push(Math.abs(data[j])+clusters[i]);
    } else if (data[j]==clusters[i]) {
        arreglo.push(0);
    } else if (data[j] > 0) {
        if (data[j]<clusters[i]) {
            arreglo.push(clusters[i]-data[j]);
        } else if (data[j] > clusters[i]) {
            arreglo.push(Math.abs(data[j]-clusters[i]));
        }
    }
}

distancia();

















