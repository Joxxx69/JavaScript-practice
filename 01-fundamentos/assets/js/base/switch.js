const dia =2;  // 0: domingo,...,2:martes,...,6:sabado


switch(dia){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2: 
        console.log('Martes');
        break;
    default:
        console.log('no es lunes, martes o domingo');
        break;
}
