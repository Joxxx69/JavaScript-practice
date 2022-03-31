const heroes = ['Batman', 'Superman', 'Mujer Maravilla','Aquaman'];
const personas =[
    {name:'camilo'},
    {name:'santiago'},
    {name:'karla'},
    {name:'camila'},
    {name:'critina'},
    {name:'jose'}
]

console.warn('For tradicional');

for(let i=0; i< heroes.length;i++){
    console.log(heroes[i])
}
console.warn('For in');

// se inicializa la variable i 
// in
// el arreglo o el objeto
console.error('Con arreglos')
for(let i in heroes ){
    console.log(heroes[i])
}
console.error('con objetos')
for (const i in personas) {
    console.log(personas[i].name)
}

console.warn('For of');
// extrae el valor que se encuentra dentro del arreglo o objeto
console.error('con objetos')

for(let persona of personas){
    console.log(persona.name)
}
console.error('Con arreglos')
for (const heroe of heroes) {
    console.log(heroe)
}

