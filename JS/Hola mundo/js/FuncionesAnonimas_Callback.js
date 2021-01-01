'use strict'

//Callback

function suma(parametro1,parametro2,sumarYmostrar,mostrarX2){
	var sumar = parametro1 + parametro2;
	sumarYmostrar(sumar);
	mostrarX2(sumar);
}

suma(3,5,
	function(dato){
		console.log(dato);
	},
	function(dato){
		console.log(dato*2);
	});