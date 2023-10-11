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



// STRINGS


let fruit1 = "fresa";
let fruit2 = "pera";
let fruit3 = "tomate";


// concatenar strings
let receta = "La receta para un smoothie es: " + fruit1 + ", " + fruit2 + " y " + fruit3
// console.log(receta)


// interpolacion de strings
// `` backticks o template literals
let recetaMejorada = `La receta para un smoothie es ${fruit1}, ${fruit2} y ${fruit3}`
console.log(recetaMejorada)



// Indices y posiciones

let simpleWord = "hola";
//                ||||
//                0123

console.log( simpleWord.charAt(8) )

// Notación de corchetes
console.log( simpleWord[3] )


// .length => cantidad de caracteres

console.log(simpleWord.length) // 4


// hacer un console.log del ultimo caracter de la palabra
let lastCharacter = simpleWord[simpleWord.length - 1]
console.log(lastCharacter)




// indexOf => buscar la posición de una letra o palabra
// -1 significa, no lo consiguió
console.log(simpleWord.indexOf("x"))

// includes busca si existe o no y devuelve un booleano




// slice

let longWord = "bananaramawakawakaehehsamiramira"


let wordCopy = longWord.slice(14, 18)
console.log(wordCopy)


let uppercased = wordCopy.toUpperCase()
console.log(uppercased)



// capitalizar una palabra

let username = "antonio";

// let capitalized = username[0].toUpperCase() // "A"
// capitalized = capitalized + username.slice(1, username.length)

// let capitalized = username[0].toUpperCase() + username.slice(1, username.length)
let capitalized = username[0].toUpperCase() + username.slice(1) // es Igual que arriba

console.log(capitalized)



