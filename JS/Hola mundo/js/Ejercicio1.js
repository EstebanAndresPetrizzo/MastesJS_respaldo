'use strict'

var numero1= parseInt(prompt("Ingrese el primer nuemero", 0));
var numero2= parseInt(prompt("Ingrese el segundo nuemero", 0));


while(numero1<=0 || numero2<=0 || isNaN(numero1) || isNaN(numero2)) {
	var numero1= parseInt(prompt("Ingrese el primer nuemero", 0));
	var numero2= parseInt(prompt("Ingrese el segundo nuemero", 0));
}


if (numero1 > numero2) {
	console.log("el numero: "+numero1+" es mayor que: "+numero2);
} else if (numero1 < numero2) {
	console.log("el numero: "+numero1+" es menor que: "+numero2);
} else {
	console.log("el numero: "+numero1+" es igual que: "+numero2);
}