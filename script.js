console.log("Hola mundo desde script.js");

// un comentario

/*

comentarios 
multiples
lineas

*/

// var, let y const

// declarando una variable (crear una caja)
let miVariable;

console.log(miVariable);

// Inicializar una variable (asignando un valor inicial)
miVariable = "manzana";

console.log(miVariable);

miVariable = "tomate";

console.log(miVariable);

// delarar e inicializar la variable en la misma linea
let myHobby = "Gaming";

console.log(myHobby);

let newVariable = myHobby;

console.log(newVariable);

newVariable = miVariable;
console.log(newVariable);

// let 4fruit; // NOPE
// let import; // NOPE (palabras reservadas)
// let mianimalfavoritodelmundo;
let miAnimalFavoritoDelMundo;

// let o const

let age = 30;
console.log(age);
age = 33;
console.log(age);

const birthdate = "01/01/2000";
// birthdate = "01/01/2001" // Assignment to constant variable.

// const algo;

// var lo estudiamos la semana que viene
// nunca usar var. Es obsoleto. Es mal visto.

// Tipos de data y typeof

let var1 = "hola";
console.log(var1, typeof var1);

let var2 = 10.1;
console.log(var2, typeof var2);

let var3 = true;
console.log(var3, typeof var3);

let var4 = null;
console.log(var4, typeof var4); // SI ES SU PROPIO TIPO DE DATA null

let var7 = undefined;
console.log(var7, typeof var7)

let var8 = NaN
console.log(var8, typeof var8) // no es su propio tipo de data. Es tipo "number" 


let var5 = { name: "Jorge" }
console.log(var5, typeof var5)

let var6 = [ "Jorge" ]
console.log(var6, typeof var6) // Los arrays son de tipo objeto
