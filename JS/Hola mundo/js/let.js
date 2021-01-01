'use strict'

//tipica palabra de type Script

let prueba = "hola";
/*diferencia entre let y var
let limita su alcanse al bloque, declaracion o exprecion
var define una variable local o global al bloque donde se define
*/


//con var

var numero = 40;
console.log(numero);

if (true) {
	numero = 50;
	console.log(numero);
}

console.log(numero);

//con let

console.log(prueba);

if (true) {
	let prueba = "HOLA";
	console.log(prueba);
}

console.log(prueba);