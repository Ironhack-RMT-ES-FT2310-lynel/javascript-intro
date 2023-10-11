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



// NUMBERS


let posNum = 10;
let negNum = -20;
let floatNum = 40.2;

console.log(posNum, negNum, floatNum)



// Operadores matematicos


let num1 = 6;
let num2 = 2;

console.log( num1 + num2 )
console.log( num1 - num2 )
console.log( num1 * num2 )
console.log( num1 / num2 )
console.log( num1 ** num2 )

console.log( num1 % num2 ) // no tiene nada que ver con porcentaje
// 2 + 2 + 2 = 6 => 0

// operador % nos dice si un numero es exactamente divisible entre otro

console.log( 10 % 4 ) // 4 + 4 = 8 => El restante 2

console.log(76428746823743 % 2)
// 0 es par
// 1 es impar


// Operadores de asignación


let myAge = 36;
console.log(myAge)


myAge = myAge + 1; // le suma 1
console.log(myAge)


myAge += 1; // le suma 1
console.log(myAge)


myAge++; // le suma 1
console.log(myAge)



// Coercion

console.log(3 + 5)

console.log("3" + "5")

console.log("5" - "3")
// intenta cambiar el string1 a numero => 5
// intenta cambiar el string2 a numero => 3
// hace la resta => 2

console.log("javascript" - "script")
// intenta cambiar el string1 a numero => Not a Number

let number1 = "20"
let number2 = "40"

console.log( parseInt(number1) + Number(number2) )
// para cambiar de string a number:
// 1. Number
// 2. parseInt
// 3. agregar un + al inicio del string



console.log(3 + "5") // "35"
console.log("3" + 5) // "35"
// JS primero ejecuta el operador + como un operador de concatenación.



// Objeto Global Math

// Math.max y Math.min

let max = Math.max(10, 20, 3)
console.log(max)

let min = Math.min(10, 20, 3)
console.log(min)

let randomNumber = Math.random() * 20 // no lleva argumentos. entre 0 y 20
console.log(randomNumber)

// Math.floor()
let randomNumberFloor = Math.floor(randomNumber)
console.log(randomNumberFloor)


// BOOLEANS

let posBool = true;
let negBool = false;
console.log(posBool, negBool)



// Operador NOT (!) => dar el valor booleano opuesto


console.log(!posBool)




// Operadores de comparaciones

let food1 = "hamburguesa";
let food2 = "pizza";
let food3 = "hamburguesa";


console.log( food1 === food2 ) // comparamos valores
console.log( food1 === food3 ) // comparamos valores

console.log( food1 !== food3 )

let n1 = 10;
let n2 = 10;

console.log( n1 >= n2 )

// <
// >
// <=
// >=


console.log( "a" > "t" ) // 97 > 116 => false
// cuando JS analiza operadores de mayor/menor en string, los analiza a traves de tu codigo ASCII


// "==" y "==="

// "===" estrictamente igual
// "==" igual, permite coercion

console.log("5" === "5")
console.log(5 === "5") // false. Tipo de data diferente.
console.log(5 == "5") // coercion


// operadores logicos

// && and
// || or

console.log("manzana" === "pera" && "banana" === "banana")
//                    false      &&         true

// solo es verdadero si todas las condiciones son verdaderas
// si una es falso, todo es falso

console.log("manzana" === "pera" || "banana" === "banana")
//                    false      ||         true

// solo es falso, si todos son falsos
// si al menos uno es verdadero, todo es verdadero



// Guess the console input for each console.log

// Part 1.

console.log(true && false); 
console.log(11 % 3 === 2); 
console.log(false || true); 
console.log(!true || false); 
console.log(17 == '17'); 
console.log(123 === '123'); 
console.log('Hello' - 'llo');

// Part 2.

let statement = 'i love javaScript!';

console.log(statement.indexOf("I")) 

let subStatement = statement.slice(7, -1);
console.log(subStatement);

console.log(statement[0].toUpperCase()) 

statement.toUpperCase();
console.log(statement); 

// "I LOVE JAVASCRIPT!"
// "i love javascript!"
// "I love javascript!"
// error!

// los strings son INMUTABLES. No podemos acceder a partes de él para cambiarlas. Solo podemos reemplazar valores de variables.


// CONDICIONALES

// if if else

/* 
if (condicion) {
  lo que ocurre si la condicion es verdadero
}
*/


let naranjas = -10;

// if (naranjas === 0) {
//   console.log("no tienes naranjas para hacer zumo")
// }

// if (naranjas > 0 && naranjas <= 10) {
//   console.log("Podemos hacernos un zumo")
// }

// if (naranjas > 10) {
//   console.log("Podemos hacer zumo para todos!!!")
// }


if (naranjas === 0) {
  console.log("no tienes naranjas para hacer zumo")
  // termina la ejecución del condicional
} else if (naranjas > 0 && naranjas <= 10) {
  console.log("Podemos hacernos un zumo")
  // termina la ejecución del condicional
} else if (naranjas > 10) {
  console.log("Podemos hacer zumo para todos!!!")
  // termina la ejecución del condicional
} else {
  // Lo que ocurre si ninguna de las condiciones fue verdadero
  console.log("lo sentimos, hubo un error con las naranjas :(")
}


// switch

let color = "magente"

switch(color) {

  case "amarillo":
    console.log("cosas amarillas: bananas, lapices, el sol")
    break; // deten la ejecución del switch
  case "azul":
    console.log("cosas azules: el cielo, el mar")
    break; // deten la ejecución del switch
  default:
    // Lo que ocurre si ninguna de las condiciones fue verdadero
    console.log("no tengo registros de este color")
}



// For LOOP


/* 

for ( 
  variable control;
  condicional que define cuanto va a deternse el bucle;
  manipulacion de la variable control;
) {
  lo que ocurre en cada iteración del bucle
}


*/


// let patata = 0; SE EJECUTA UNA SOLA VEZ, antes de que inicie el bucle
for (let patata = 0; patata < 10; patata = patata + 2) {

  // if (patata < 10) continua con el bucle
  // else deten el bucle

  console.log("ejecutando bucle", patata)


  // patata = patata + 1; SOLO AL FINAL DE CADA ITERACIÓN
  // vuelve a empezar
}


// console.log(patata)

for ( let i = 0; i < 20; i++ ) {
  console.log(i)




}



// Loops y strings

let lyrics = "Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World, Around the World"

// queremos analizar los characteres del string
// cuantas veces está repetida la frase.
let cantidad = 0;

for ( let i = 0; i < lyrics.length; i++ ) {

  // console.log( lyrics[i] )

  if (lyrics[i] === ",") {
    console.log("encontramos una coma")
    cantidad = cantidad + 1
  }


}

// hay x cantidad de frases en la cancion
console.log(cantidad)
console.log(`hay ${cantidad+1} frases en la liricas!`)





// continue & break


let string = "B?!*??!n!!*!n?!*?!? !w1!w??!k!o???o!!";

// cambiar todos los "*"" a "a"
// remover todos los "!" o "?"
// remover todo lo que esté despues del " "

let codigoSecreto = "";

for ( let i = 0; i < string.length; i++) {

  let character = string[i]

  if (character === "*") {
    character = "a"
  } else if (character === "!" || character === "?") {
    // character = ""
    continue; // deten la iteración actual del bucle
  } else if (character === " ") {
    break; // deten TODO el bucle
  }



  codigoSecreto = codigoSecreto + character

}


console.log(codigoSecreto)