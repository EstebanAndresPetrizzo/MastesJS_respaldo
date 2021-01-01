'use strict'

//operadores

var numero1 = 7;
var nuemro2 = 2;
var operacion = nuemro2%numero1;

console.log(operacion);

//tipos de datos

//numericos
var numero = 56;

//texto
var texto = "10.87";

//booleanos
var booleanos = true;

if (booleanos) {
	console.log(Number(texto)+numero);
	console.log(parseInt(texto)+numero);
	console.log(parseFloat(texto)+numero);

	debugger;
	console.log(String(Number(texto)+numero)+"F");
}

