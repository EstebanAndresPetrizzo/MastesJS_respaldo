'use strict'

var numero1 = parseInt(prompt("Introduce el primer numero",0));
var numero2 = parseInt(prompt("Introduce el numero final",0));

if (!(isNaN(numero1)||isNaN(numero2))) {
	if (numero1<numero2) {
		document.write(numero1+"</br>");
		for (var i = numero1+1; i < numero2; i++) {
			document.write(i+"</br>");
		}
		document.write(numero2+"</br>");
	} else {
		alert("el primer numero debe ser menor que el segundo");
	}
} else {
	alert("los datos ingresados deben ser numericos");
}