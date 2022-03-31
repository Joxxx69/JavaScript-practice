
// ----------- FUNCION ANONIMA AUTOEJECUTABLE ----------------------------
(function(nombre){
    console.log(`hola ${nombre}`)
})('karla');

((nombre)=>{
    console.log(`hola ${nombre}`);
})('Santiago');

//------------------------------CLASICA----------------------------------------
// FUNCION FLECHA
((nombre)=>{
    console.log(`hola ${nombre}`);
})('jose');

//FUNCION NORMAL
(function(nombre){
    console.log(`hola ${nombre}`)
})('karla');


//--------------------la Crockford (JavaScript The Good Parts)-------------------
//FUNCION FLECHA
(((nombre)=>{
    console.log(`hola ${nombre}`);
})('camila'));

//FUNCION NORMAL
((function(nombre){
    console.log(`hola ${nombre}`);
})('camila'));

//--------------------------------Unaria---------------------------------------- 
//FUNCION NORMAL
+function(nombre){
    console.log(`hola ${nombre}`);
}('camilo');

//--------------------------------facebook-----------------------------------------
//FUNCION NORMAL
!function(nombre){
    console.log(`hola ${nombre}`);
}('cristina');