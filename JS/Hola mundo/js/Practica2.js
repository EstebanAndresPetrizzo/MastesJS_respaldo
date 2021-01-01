'use strict'

var suma = 0;
var media = 0;
var cociente = 1;
var numeroIngresado= parseInt(prompt("Ingrese un numero o un número menor que cero para terminar", 0));

while(numeroIngresado >= 0 || isNaN(numeroIngresado)){
	if (isNaN(numeroIngresado)) {
		console.log("solo se admiten numeros");
		numeroIngresado = 0;
	} else {
		suma+=numeroIngresado;
		media+=numeroIngresado;
		cociente++;
		var numeroIngresado= parseInt(prompt("Ingrese un numero o un número menor que cero para terminar", 0));	
	}

}

console.log("Media: "+media/cociente+", Suma: "+suma);
