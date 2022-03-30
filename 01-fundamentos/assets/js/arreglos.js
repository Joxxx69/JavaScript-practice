// const arr = new Array(10);

// console.log(arr)


let videojuegos = ['mario', 'megaman', 'pacman'];

console.log({videojuegos});

console.table(videojuegos);

console.log(videojuegos[0]);

let arregloCosas =[
    true, 
    123,
    'santiago',
    1+2,
    function(){
        console.log('normal function')
    }, 
    ()=>{
        console.log('arrow function')
    },
    {a:1},
    ['x','megaman','zero','dr. light',[
        'willy',
        'woodman',
        'jack'
    ]]
];

console.log({arregloCosas});

console.log(arregloCosas.length)
console.log(arregloCosas[7].length)
console.log(arregloCosas[7][4].length)
console.log(arregloCosas[7][4][2])










