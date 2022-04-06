// El modulo tiene su parte privada y publica
// pirvada ---> codigo 
// publico ---> lo que se retorna

/**
 * 2C = Two of Clubs (Treboles)
 * 2D = Two of Diamonds (diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (espadas)
 */
// la funcion anonima autoejecutable --> hace que el codigo sea mas privado
const miModulo= (()=>{
    'use strict' // --->>> esto hace que javascript evalue el codigo estrictamente
    let deck = [];
    const tipos =['C','D','H','S'],especiales =['A','J','Q','K'];

    //Referencias del HTML
    // let puntosJugador =0, puntosComputadora=0;
    let puntosJugadores = [];
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');



    const divCartasJugadores = document.querySelectorAll('.divCartas')
    
    const puntosHTML = document.querySelectorAll('small');

    // Esta funcion inicializa el juego
    const inicializarJuego = (numJugadores =  2) =>{
        crearDeck();
        puntosJugadores = [];
        for(let i=0; i<numJugadores;i++){
            puntosJugadores.push(0);
        }
        puntosHTML.forEach(elemeto => elemeto.innerText = 0);
        divCartasJugadores.forEach(elemeto => elemeto.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    }

    const crearDeck = ()=>{
        deck = [];
        for(let i=2; i <=10;i++){
            for (const tipo of tipos) {
                deck.push(`${i}${tipo}`);
            }
        }
        for (const tipo of tipos) {
            for (const esp of especiales) {
                deck.push(`${esp}${tipo}`)
            }
        }  
        deck = _.shuffle(deck);
    }

    // Esta funcion me permite tomar una carta
    const pedirCarta = () => {   

        if(deck.length === 0){
            throw 'No hay mas cartas en el deck'
        }
        // Metodo 1: para obtener una carta random y eliminarla del deck
        // const posicion =Math.floor(Math.random()*(deck.length));
        // const carta =deck[posicion]
        // deck =deck.filter(cartaElegida => cartaElegida != carta);

        //Metodo 2: para eliminar una con pop
        return deck.pop();
    }
    // Esta funcion sirve para obtener el valor de la carta
    const valorCarta =(carta)=>{
        const valor = carta.substring(0,carta.length-1);
        return (!isNaN(valor))? parseInt(valor):
                            (valor === 'A')? 11:10;
    }
    // Turno: 0 = primer jugador y el ultimo sera la computadora
    const acumularPuntos = (carta,turno) =>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }
    const crearCarta =(carta, turno) =>{
        const imgCarta = document.createElement('img');
        imgCarta.src = `./assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta)
    }

    const determinarGanador =()=>{
        const [puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(()=>{
            if(puntosComputadora === puntosMinimos){
                alert('Nadie gana');
            }else if(puntosMinimos > 21){
                alert('Computadora gana');
            }else if(puntosComputadora > 21){
                alert('Jugador gana');
            }
        },100);
    }


    // Esta funcion 
    const turnoComputadora = (puntosMinimos)=>{
        console.log('puntos minimos: ', puntosMinimos)
        let puntosComputadora =0;
        do {
            let carta =  pedirCarta();
            puntosComputadora = acumularPuntos(carta,puntosJugadores.length-1);
            console.log('puntos pc:',puntosComputadora)
            crearCarta(carta,puntosJugadores.length-1);
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
       determinarGanador();
    }


    btnPedir.addEventListener('click',()=>{
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta,0);
        crearCarta(carta,0);
        if(puntosJugador > 21){
            console.warn('lo siento mucho, perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled =  true;
            turnoComputadora(puntosJugador);
        }else if(puntosJugador === 21){
            console.warn('genial, ganaste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    }); 
    
    btnDetener.addEventListener('click',()=>{

        const [puntosJugador] = puntosJugadores;
        console.log('detener',puntosJugador)
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    })

    // btnNuevo.addEventListener('click',()=>{
    //     inicializarJuego();
    // });

    return {
        inicializarJuego
    };
})();

// ejemplo 
console.log(miModulo)
document.querySelector('#btnNuevo').addEventListener('click',()=>{
    miModulo.inicializarJuego();
});


