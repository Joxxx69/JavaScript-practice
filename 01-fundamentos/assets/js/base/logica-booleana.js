const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}
const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion');
console.log(true);     //true
console.log(!true);   //false
console.log(!false); //true


console.log(!regresaFalse()); //true
console.log(!regresaTrue()); //false


console.log('And');
console.log(true && true); // true
console.log(true && false); //  false
console.log(true && !false); //  true


console.log('=====================');

console.log(regresaFalse() && regresaTrue()); //false
console.log(regresaTrue() && regresaFalse()); //false

console.log('=========&&===========')

regresaTrue() && regresaFalse(); // solo muestra este por que el principio es true

regresaFalse() && regresaTrue(); // no muestra nada, ya que el inicio es false

console.log('4 condiciones', true && true && true && false); // false


console.warn('OR');  // siempre regresa TRUE
// si encunetra un valor de true --> la condicion es true

console.log(true || false); // true
console.log(false || false); // false

console.log(regresaTrue() || regresaFalse()) //true


console.log('4 condiciones', true || true || true || false); // true

console.warn('Asignaciones');

const soyUndefined = undefined; // no tiene valor
const soyNull = null; // no tiene valor
const soyFalso = false;


const a1 = true && 'hola mundo' && 150; // es true, tiene valor('hola mundo'-->true), tiene valor(150) ---> a1 = 150
const a2 = 'hola' && 'mundo'; // es true,tiene valor('hola'-->true), tiene valor ('mundo'--> true) es true --> resultado 'mundo'
const a3 = soyFalso ||'Ya no soy falso';  // true --> por 'Ya no soy falso'
const a4 = soyFalso || soyUndefined || soyNull ||'Ya no soy falso' || true; // true --> por 'Ya no soy falso'
const a5 = soyFalso || soyUndefined || soyNull || regresaTrue()  ||'Ya no soy falso'; // true --> por regresaTrue()

console.log({a1,a2,a3, a4, a5});


